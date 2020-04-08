const languages = require("./src/i18n/languages")

const manager = require("react-intl-translations-manager")
const manageTranslations = manager.default

const messagesDir = "src/i18n/messages"
const translationsDir = "src/i18n/translations/"

manageTranslations({
  messagesDirectory: messagesDir,
  translationsDirectory: translationsDir,
  singleMessagesFile: true,
  languages: languages.langs,
  overrideCoreMethods: {
    /**
     * Avoid reporting default lang as untranslated.
     */
    provideWhitelistFile(data) {
      if (data.lang === languages.defaultLangKey) {
        const messageFiles = manager.readMessageFiles(messagesDir)
        const messages = manager.getDefaultMessages(messageFiles).messages
        return Object.keys(messages)
      }

      return []
    },
  },
})
