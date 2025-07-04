#!/bin/bash
cd /home/kavia/workspace/code-generation/reacttestsetup-66851-e9760daf/test_app_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

