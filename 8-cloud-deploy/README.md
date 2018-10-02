
## Install AWS CLI

`brew install awscli` or [https://docs.aws.amazon.com/cli/latest/userguide/cli-install-macos.html](https://docs.aws.amazon.com/cli/latest/userguide/cli-install-macos.html)

## Configure AWS CLI

[https://docs.aws.amazon.com/cli/latest/userguide/cli-config-files.html](https://docs.aws.amazon.com/cli/latest/userguide/cli-config-files.html)

## Session

`aws cloudformation deploy --stack-name challenge-app-registry --template-file aws/registry.yml`

`aws cloudformation list-exports`

find ImageUrl in exports list

`docker tag challenge-app:latest <repository_url>:v1`

`$(aws ecr get-login --no-include-email)`

`docker push <repository_url>`

`aws cloudformation deploy --stack-name challenge-app-bootstrap --template-file aws/bootstrap.yml --capabilities CAPABILITY_IAM`

`aws cloudformation deploy --stack-name challenge-app-service --template-file aws/service.yml`
