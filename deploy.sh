#!/usr/bin/env bash
npm run build
npm run export
rsync -avzP out/ root@nwerc.is:/var/www/nwerc.is/
