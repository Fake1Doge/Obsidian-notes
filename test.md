# How to Host a Minecraft Server and Connect via Steam

This guide explains how to set up a Minecraft server that allows your friends to join directly via **Steam Friend Invites**, avoiding the need for complicated port forwarding or IP sharing.

This is achieved using the **Essentials Mod**, which integrates Minecraft with Steam's networking features.

---

## Prerequisites
*   **Minecraft Java Edition**
*   **Steam** (Running in the background)
*   **Mod Loader:** Either **Fabric** (recommended) or **Forge**.

---

## Step 1: Install a Mod Loader (Fabric)
If you already use a mod launcher like **CurseForge**, **Prism Launcher**, or **Modrinth**, skip to [Step 2](#step-2-install-the-essentials-mod).

1.  **Download Fabric Installer:**
    *   Go to [fabricmc.net](https://fabricmc.net/use/installer/) and download the Universal Jar or Windows Exe.
2.  **Install Fabric:**
    *   Run the installer.
    *   Select the **Minecraft Version** you want to play (e.g., 1.20.4).
    *   Ensure "Create profile" is checked.
    *   Click **Install**.
3.  **Download Fabric API:**
    *   Most Fabric mods require the [Fabric API](https://modrinth.com/mod/fabric-api).
    *   Download the `.jar` file matching your game version.
    *   Place it in your Minecraft mods folder:
        *   Press `Win + R`, type `%appdata%\.minecraft\mods`, and press Enter.

## Step 2: Install the Essentials Mod
This is the core component that enables Steam connectivity.

1.  **Download Essentials:**
    *   Visit the [Essentials Mod Downloads](https://essential.gg/download) page.
    *   Select **Fabric** (or Forge if you chose that).
    *   Select your **Minecraft Version**.
    *   Download the `.jar` file.
2.  **Install the Mod:**
    *   Move the downloaded `Essential-fabric-....jar` file into your `mods` folder:
        *   `%appdata%\.minecraft\mods`

## Step 3: Launch & Verify
1.  Open the **Minecraft Launcher**.
2.  Select the **fabric-loader** profile from the dropdown menu (bottom left).
3.  Click **Play**.
4.  **Verification:**
    *   Once the main menu loads, you should see an **Essentials** button or your skin preview on the right side.
    *   You might get a prompt to "Log in to Essentials" or connect your account. This basically links your Minecraft session to the mod's features.

## Step 4: Host a World via Steam
1.  **Start a World:**
    *   Go to **Singleplayer** and load an existing world or create a new one.
2.  **Open to Friends:**
    *   Once in-game, press `Esc`.
    *   Click the **Invite** button (usually on the right side of the pause menu).
    *   *Note: First time setup may ask you to agree to Terms of Service.*
3.  **Invite Settings:**
    *   You can set the world to **Friends Only** or **Invite Only**.

## Step 5: Friends Join via Steam
Your friends **must also have the Essentials Mod installed** and be running the same Minecraft version.

1.  **Method A: Steam Invite**
    *   In the "Invite" menu in-game, click your friend's name and send an invite.
    *   They will receive a message in Steam Chat to "Join Game".

2.  **Method B: Right-Click Join**
    *   Your friend can open their Steam Friends list.
    *   Right-click your name.
    *   Select **Join Game**.

**Done!** You are now hosting a server on your own PC, and Steam is handling the connection routing. No port forwarding needed.
