job('Resume_generator_jobdsl_executing_jobs') {
    scm {
        git('https://github.com/college-teams/resume_generator.git') {  node -> // is hudson.plugins.git.GitSCM
            node / gitConfigName('DSL User')
            node / gitConfigEmail('rahulkrishnanr016@gmail.com')
            node / branch("jenkins_scripts")
        }
    }
    triggers {
        scm('H/5 * * * *')
    }
    wrappers {
        nodejs('Node_js') // this is the name of the NodeJS installation in 
                         // Manage Jenkins -> Configure Tools -> NodeJS Installations -> Name
    }
    steps {
        shell("npm install")
    }
}