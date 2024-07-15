@echo off
setlocal enabledelayedexpansion

set "directory=E:\huaer\Nueink\walttec-org\prixite.github.io-master\prixite.github.io-master\public\images\walttec"
set "prefix=img_"
set "counter=1"

cd /d "%directory%"

for %%f in (*.jpg *.png) do (
    set "filename=%%~nf"
    ren "%%f" "%prefix%!counter!.png"
    set /a counter+=1
)

echo All files have been renamed and converted to PNG.
pause
