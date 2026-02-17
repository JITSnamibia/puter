/*
 * Copyright (C) 2024-present Puter Technologies Inc.
 *
 * This file is part of Puter.
 *
 * Puter is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
const vercel_hostname = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
const is_vercel = !!process.env.VERCEL;

module.exports = {
    config_name: 'generated default config',
    env: is_vercel ? 'prod' : 'dev',
    nginx_mode: true, // really means "serve http instead of https"
    server_id: 'localhost',
    http_port: process.env.PORT ?? 'auto',
    domain: vercel_hostname || 'puter.localhost',
    protocol: is_vercel ? 'https' : 'http',
    contact_email: 'hey@example.com',
    allow_all_host_values: is_vercel,
    experimental_no_subdomain: is_vercel,
    disable_ip_validate_event: is_vercel,
    no_browser_launch: is_vercel,

    services: {
        database: {
            engine: 'sqlite',
            path: 'puter-database.sqlite',
        },
        dynamo: {
            path: './puter-ddb',
        },
    },
};
