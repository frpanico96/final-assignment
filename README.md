# Final Assignment

You can find the project in the *`dev`* branch

## Useful commands

Before deploying the cdk app make sure to compile the lambda function via the following command

* `npm run build:lite` inside the lambda function and make sure to go back to the main folder before starting to deploy.

Alternatively you can run directly the command

* `cd lambda && npm run build:lite && cd ..`

## Useful Exmaple Invocations

*Empty Body*

```
curl --location --request POST 'https://xxxxxxxxxx.execute-api.localhost.localstack.cloud:4566/v1/auth' \
--data-raw ''
```

*Missing Password Request*

```
curl --location --request POST 'https://xxxxxxxxxx.execute-api.localhost.localstack.cloud:4566/v1/auth' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "obi"
}'
```

*Incorrect Username/Password*

```
curl --location --request POST 'https://xxxxxxxxxx.execute-api.localhost.localstack.cloud:4566/v1/auth' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "obi",
    "password": "obi"
}'
```

*Correct Invocation*
```
curl --location --request POST 'https://xxxxxxxxxx.execute-api.localhost.localstack.cloud:4566/v1/auth' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "obi",
    "password": "kenobi"
}'
```