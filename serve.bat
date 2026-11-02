@echo off
title Quartz Local Preview
echo ==============================================
echo   Starting Quartz Live Preview Server...
echo   Open in browser: http://localhost:8080
echo ==============================================
pushd "D:\User\Desktop\quartz"
npx quartz build --serve
popd
