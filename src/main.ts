import * as core from '@actions/core'
import * as github from '@actions/github' 

async function main(): Promise<void> {
  try {
    const gh_token = core.getInput('GITHUB_TOKEN')
    const gh_repository = core.getInput('GITHUB_REPOSITORY')
    const pr = core.getInput('pull_request')
    console.log(gh_token)
    console.log(gh_repository)
    console.log(pr)
    //!TODOs
    // get the raw event data for the github event
    // check for the github token
    // get repo
    // get the current pr
    // get all commit messages
    // format commit messages for output
    // post the messages to the pr
    core.debug('test')  
    
  } catch (error) {
    core.setFailed(error.message)
  }
}

main()
