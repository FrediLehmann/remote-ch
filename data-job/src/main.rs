use serde_json::Value;
use std::fs::File;

const LOCATIONS: [&str; 1] = ["Worldwide"];

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
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

    serde_json::to_writer(&File::create("jobs.json")?, &filtered)?;

    // println!("{} {}", filtered.len(), response.as_array().unwrap().len());

    Ok(())
}
