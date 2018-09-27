
`aws cloudformation deploy --stack-name challenge-app-bootstrap --template-file challenge-app-bootstrap.yml --capabilities CAPABILITY_IAM`

`aws cloudformation list-exports`

`docker tag challenge-app:latest <repository_url>:v1`

`$(aws ecr get-login --no-include-email)`

`docker push <repository_url>`

`aws cloudformation deploy --stack-name challenge-app-service --template-file challenge-app-service.yml --capabilities CAPABILITY_IAM`
