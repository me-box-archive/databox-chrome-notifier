# Databox Chrome Notifier

This repository is the source code for a chrome extension that can display notifications sent to the
`/notify/push` endpoint of the notification API.

## Installation

```sh
git clone https://github.com/me-box/databox-chrome-notifier.git
```

Duplicate `fcm_config_template.js` and name the
copy `fcm_config.js`

Populate the `senders` array with the sender ID from Firebase.

Install the extension in chrome using the extensions
settings screen.

## Usage

It is not currently possible to save the FCM
registration to the databox, so the extension
has limited use at present. Fixing this requires
knowing where/how the details are to be stored.
