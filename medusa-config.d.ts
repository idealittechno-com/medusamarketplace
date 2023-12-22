/** @type {import('@medusajs/medusa').ConfigModule["projectConfig"]} */
export const projectConfig: import('@medusajs/medusa').ConfigModule["projectConfig"];
export const plugins: (string | {
    resolve: string;
    options: {
        upload_dir: string;
        api_key?: undefined;
        webhook_secret?: undefined;
    };
} | {
    resolve: string;
    /** @type {import('@medusajs/admin').PluginOptions} */
    options: import('@medusajs/admin').PluginOptions;
} | {
    resolve: string;
    options: {
        api_key: string;
        webhook_secret: string;
        upload_dir?: undefined;
    };
})[];
export const modules: {};
