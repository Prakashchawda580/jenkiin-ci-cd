pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/your-username/your-repo.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('jenkins-ci-cd')
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh 'docker run -d -p 8080:8080 --name jenkins-app jenkins-ci-cd || true'
                }
            }
        }
    }

    post {
        always {
            echo "Pipeline finished"
        }
    }
}