#!/bin/bash

# inspired by https://github.com/unsplash/comment-on-pr/blob/master/entrypoint.sh

require "json"
require "octokit"

# get the raw event data for the github event
json = File.read(ENV.fetch("GITHUB_EVENT_PATH"))
event = JSON.parse(json)

github = Octokit::Client.new(access_token: ENV["GITHUB_TOKEN"])

echo event

# check for the github token
if !ENV["GITHUB_TOKEN"]
  puts "Missing GITHUB_TOKEN"
  exit(1)
end

# get repo
repo = event["repository"]["full_name"]

# get the current pr


# get all commit messages

# format commit messages for output

# post the messages to the pr
