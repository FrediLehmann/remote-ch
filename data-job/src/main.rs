use serde_json::Value;
use std::fs;
use std::process::Command;

const LOCATIONS: [&str; 1] = ["Worldwide"];

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Fetch data
    let mut response: Value = reqwest::get("https://remoteok.io/api")
        .await?
        .json::<Value>()
        .await?;

    // Remove first entry as it contains no data, only legal information
    response.as_array_mut().unwrap().pop();

    // Remove jobs that are not applicable for swiss people
    let filtered: Vec<Value> = response
        .as_array()
        .unwrap()
        .iter()
        .cloned()
        .filter(|job| LOCATIONS.contains(&job["location"].as_str().unwrap_or("")))
        .collect::<Vec<Value>>();

    serde_json::to_writer(&fs::File::create("../public/jobs.json")?, &filtered)?;

    println!("{:?}", fs::canonicalize("../")?);

    // Command::new("git stage")
    //     .arg("jobs.json")
    //     .current_dir(fs::canonicalize("../")?)
    //     .spawn()
    //     .unwrap();
    // .status()
    // .expect("Failed to stage changes");

    // .spawn()
    // .expect("Failed to stage changes");

    // println!("{} {}", filtered.len(), response.as_array().unwrap().len());

    Ok(())
}
