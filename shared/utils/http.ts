import { readdirSync, statSync } from 'fs';
import {  Router } from 'express';

export const loadRoutes = (path: string, router: Router, ignore?: string[]) =>
  readdirSync(path)
    .filter(f => f.endsWith('.ts') || f.endsWith('.js'))
    .filter(
      f =>
        ![
          'shared-schemas.js',
          'index.js',
          'output-maps.js',
          'shared-schemas.ts',
          'index.ts',
          'output-maps.ts',
        ].includes(f),
    )
    .filter(f => !ignore || !ignore.includes(f))
    .map(f => path + '/' + f)
    .filter(f => !statSync(f).isDirectory())
    .forEach(f => require(f).default && require(f).default(router));
