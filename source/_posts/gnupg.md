---
title: GnuPG
categories:
  - Linux Command
intro:
  A cheatsheet for GnuPG, the encryption and signing software.
---
## Getting Started

### Software

Gpg4win and the GPG Suite have OS-specific features.

* [GnuPG](https://gnupg.org/)
* [Gpg4win](https://www.gpg4win.org/) (Windows)
* [GPG Suite](https://gpgtools.org/) (macOS)

Sometimes GPG keys are referred as PGP keys. They're interchangeable, as they follow the [OpenPGP Standard](https://www.rfc-editor.org/rfc/rfc9580.html).

### Create a key-pair

Generate your keys:

```shell script
$ gpg --generate-key
```

... or fully configure your keys.

```shell script
$ gpg --generate-full-keys
```

**Note:** Choose a strong passphrase! The encryption is only as strong as your passphrase.

### Key management

List your keys:

```shell script
$ gpg --list-keys
```

List your secret keys:

```shell script
$ gpg --list-secret-keys
```

Export your public key:

```shell script
$ gpg --export --armor <ID>
```

Export your secret key:

```shell script
$ gpg --export-secret-key --armor <ID>
```

Delete your public key:

```shell script
$ gpg --delete-key <ID>
```

Delete your secret key:

```shell script
$ gpg --delete-secret-key <ID>
```

## Encryption

### Symmetric

Encrypt with a passphrase:

```shell script
$ gpg -c <FILE>
```

Encrypt as ASCII with `-a` flag:

```shell script
$ gpg -ac <FILE>
```

Set output file path with `-o` flag:

```shell script
$ gpg -c <FILE> -o <PATH>
```

Decrypt with a passphrase:

```shell script
$ gpg <FILE>
```

**Note:** Choose a strong passphrase! The encryption is only as strong as your passphrase.

### Asymmetric

Encrypt using public-private key encryption:

```shell script
$ gpg -e -r <RECIPIENT> <FILE>
```

Encrypt as ASCII output with `-a` flag:

```shell script
$ gpg -ea -r <RECIPIENT> <FILE>
```

Encrypt and sign with `-s` flag:

```shell script
$ gpg -se -r <RECIPIENT> <FILE>
```

Add multiple recipients:

```shell script
$ gpg -e -r <RECIPIENT1> -r <RECIPIENT2> <FILE>
```

Set output file path with `-o` flag:

```shell script
$ gpg -e -o <PATH> -r <RECIPIENT> <FILE>
```

Decrypt with your private key:

```shell script
$ gpg <FILE>
```

Replace `<RECIPIENT>` with your intended recipient's [imported public key](#importing-a-public-key) ID.

### Importing a public key

Import using a file:

```shell script
$ gpg --import <FILE>
```

Import using a link (macOS/Linux):

```shell script
$ curl <WEBSITE> | gpg --import
```

Don't forget to sign the imported key:

```shell script
$ gpg --sign-key <ID>
```

## Commit Signing

### Local Git Setup

Enable GPG signing:

```shell script
$ git config --global commit.gpgsign true
```

Set the signing key:

```shell script
$ git config --global user.signingkey <ID>
```

Set location of GPG:

```shell script
$ git config --global gpg.program <PROGRAM>
```

**Note:** Your name and email must match on Git and GnuPG.

### GPG Program List

Replace `<PROGRAM>` with one of the following:

| Platform    | Value                                      |
| ----------- | ------------------------------------------ |
| Windows     | `C:\Program Files (x86)\GnuPG\bin\gpg.exe` |
| macOS/Linux | /usr/local/bin/gpg                         |

{.left-text}

### Exporting your public key

Export as ASCII:

```shell script
$ gpg --export --armor <ID>
```

**Note:** Platforms, like GitHub, may ask you to verify the email you set in Git and GnuPG.

## Windows: Add to Startup Apps {.cols-1}

### PowerShell Commands

When you do a full restart, the GPG agent might not automatically start. Add
the GnuPG's IPC tool to Startup Apps using PowerShell:

```shell script
$ $shell = New-Object -ComObject WScript.Shell
$ $shortcut = $shell.CreateShortcut("C:\Users\$($Env:UserName)\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\gpg-connect-agent.lnk")
$ $shortcut.TargetPath = "C:\Program Files (x86)\GnuPG\bin\gpg-connect-agent.exe"
$ $shortcut.Arguments = "/bye"
$ $shortcut.Save()
```

Start up manually instead:

```shell script
$ gpgconf --launch gpg-agent
```

Check if it was successfully added [here](ms-settings:startupapps).
