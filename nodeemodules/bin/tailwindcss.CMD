@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=D:\PROJECT\portfolio\portofolioV-1.0\node_modules\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=%NODE_PATH%;D:\PROJECT\portfolio\portofolioV-1.0\node_modules\.pnpm\node_modules"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\tailwindcss\lib\cli.js" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\tailwindcss\lib\cli.js" %*
)