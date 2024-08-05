#!/bin/bash

# Validate the service is running by checking the endpoint
STATUS_CODE=$(curl -o /dev/null -s -w "%{http_code}\n" http://localhost:8000/api/get)

if [ "$STATUS_CODE" -ne 200 ]; then
  echo "Validation failed"
  exit 1
fi

echo "Validation succeeded"
