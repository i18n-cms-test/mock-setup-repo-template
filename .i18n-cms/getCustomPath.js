/** 
 * Get the path of translation file by language and namespace
 * @param {Object} data
 * @param {string} data.namespace - The namespace of translation file
 * @param {string} data.language - The language of translation file
 * @param {Object} data.repoConfig - config defined in `.i18n-cms/config.json`
 * @return {string} path of translation file
 */
export default function getCustomPath({ namespace, language, repoConfig }) {
    const ext = FILE_TYPE_MAP_DATA[repoConfig.fileType].ext;
    switch (namespace) {
      case "common":
        return `locales/${language}.${ext}`;
      default:
        return `feature/${namespace}/locales/${language}.${ext}`;
    }
}