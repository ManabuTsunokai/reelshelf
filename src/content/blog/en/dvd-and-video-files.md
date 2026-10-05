---
title: "How Are DVDs Different from Video Files?"
seoTitle: "DVDs vs. Video Files: From VIDEO_TS, VOB, and IFO to MP4 | Tamareel"
description: "Learn why a DVD is not a single video file, what VIDEO_TS, VOB, IFO, and BUP files do, and what changes when DVD-Video is converted to MP4 with H.264 and AAC."
lead: "Open a DVD on a computer and, instead of an MP4 video, you will find a VIDEO_TS folder filled with unfamiliar VOB, IFO, and BUP files. A DVD is not simply a disc containing one video. It is a playback system that can include menus, chapters, multiple audio tracks, and subtitles. Let’s look inside DVD-Video to see how it differs from a video file."
eyebrow: "VIDEO BASICS"
locale: en
author: "@yanakadev"
publishedAt: 2026-10-06
updatedAt: 2026-10-06
---

## A DVD combines multiple files for playback

When you open a typical movie DVD on a computer, you will not find one obvious video file containing the feature. Instead, the `VIDEO_TS` folder contains several VOB, IFO, and BUP files.

A DVD player reads video, audio, subtitles, chapters, menus, playback order, and other information from these files, then combines them to present the complete work. It is helpful to think of a DVD as a system made up of multiple files and playback rules.

```text
Movie DVD
├─ Files containing video, audio, and subtitles
├─ Files that manage chapters and playback order
├─ Backups of control information
└─ Menus and the rules that control them
```

By contrast, a typical video file such as an MP4 brings the video and audio needed for playback together in one file.

```text
movie.mp4
├─ Container: MP4
├─ Video: H.264
├─ Audio: AAC
└─ Metadata such as duration
```

An MP4 can therefore usually be opened and played on its own. A player does not need to assemble menus and a playback sequence from separate files as it does with a DVD.

When people talk about “converting a DVD to MP4,” they mean taking the video and audio for the program they want to watch from the DVD’s collection of files and repackaging them as a single video file.

## The main formats stored on DVDs

DVDs can store several formats designed for different purposes.

| Format | Main use | Typical structure |
| --- | --- | --- |
| DVD-Video | Commercial films, concert videos, and authored video releases | `VIDEO_TS`, VOB, IFO, BUP |
| DVD-VR | Television and other recordings made with DVD recorders | `DVD_RTAV`, VRO, IFO |
| DVD+VR | Recordings made with DVD+RW recorders | Structure similar to DVD-Video |
| DVD-Audio | High-quality music | `AUDIO_TS`, AOB, IFO, BUP |
| Data DVD | Storing computer files | MP4, photos, documents, or other files |
| AVCHD disc | Storing HD video on DVD media | `BDMV`, H.264, and related files |

The movies and television series commonly sold on DVD primarily use **DVD-Video**. A disc recorded by a home DVD recorder, however, may use DVD-VR.

A data DVD treats the disc more like a USB drive or external disk. It may contain an MP4 file, but the presence of that file does not make the disc DVD-Video.

## DVD-Video is not a single video file

When opened on a computer, DVD-Video normally contains a folder named `VIDEO_TS`. An `AUDIO_TS` folder may also be present for compatibility, although it is often empty on an ordinary DVD-Video disc.

```text
DVD_ROOT/
├── VIDEO_TS/
│   ├── VIDEO_TS.IFO
│   ├── VIDEO_TS.BUP
│   ├── VIDEO_TS.VOB
│   ├── VTS_01_0.IFO
│   ├── VTS_01_0.BUP
│   ├── VTS_01_0.VOB
│   ├── VTS_01_1.VOB
│   ├── VTS_01_2.VOB
│   └── ...
└── AUDIO_TS/
```

### VOB: combining video, audio, and subtitles

VOB stands for Video Object. A VOB holds video, audio, subtitles, and related information together.

Typical contents include:

-   Video: primarily MPEG-2 Video
-   Audio: Dolby Digital (AC-3), LPCM, MPEG Audio, DTS, and other supported formats
-   Subtitles: image-based subpictures
-   Navigation information used for playback control

Even if a VOB file can be opened and played by itself, it may not reproduce the DVD’s intended playback completely. Information such as which VOBs to play and in what order, or which audio and subtitle tracks to select initially, is also stored in separate IFO files.

It is also common for the feature to be divided across several VOB files.

```text
VTS_01_1.VOB
VTS_01_2.VOB
VTS_01_3.VOB
```

These names do not indicate three separate programs. One feature may be divided into files of approximately 1GiB because the DVD-Video specification limits the size of each file to about 1GiB. The file boundaries do not represent chapters or scene changes.

### IFO: describing how the DVD should play

An `.IFO` file contains information that determines how the DVD is played.

-   Titles and chapters
-   Playback order for the feature and bonus material
-   Audio and subtitle tracks
-   Aspect ratio
-   Destinations reached from menus
-   Playback information for features such as multiple angles

A DVD player reads the IFO files as well as the VOB files. Simply joining VOBs in filename order may therefore produce something different from the feature selected through the DVD menu.

### BUP: a backup of the IFO file

A `.BUP` file is a backup of an IFO file. It gives the DVD player another copy of the playback control information to consult if part of the disc becomes difficult to read.

It is not a backup of the video itself, so preserving a BUP file alone does not preserve the feature.

## DVD menus are not just images—they define behavior

A DVD menu is more than a static table of contents. It is implemented through a **combination of VOB and IFO files**: VOB files contain elements such as the menu’s background video, audio, and button display, while IFO files manage the menu structure and playback behavior.

| File | Purpose |
| --- | --- |
| `VIDEO_TS.VOB` | Video and audio for the disc’s top-level menu and related content |
| `VIDEO_TS.IFO` | The disc-wide title structure and top-level menu control |
| `VTS_01_0.VOB` | Chapter, audio, subtitle, and other menus for title set 1 |
| `VTS_01_0.IFO` | Menu structure and playback control for title set 1 |
| `VIDEO_TS.BUP` and `VTS_01_0.BUP` | Backups of the corresponding IFO files |

A filename ending in `_0.VOB` normally identifies the menu VOB for that title set. The feature begins in `VTS_01_1.VOB` and continues in the files that follow it.

When someone selects a button to play the feature, jump to a chapter, or change the audio or subtitles, the DVD player interprets navigation information in the IFO and VOB files and performs the requested action.

## A video file brings the parts needed for playback together

Video files such as MP4 and MKV bring video, audio, subtitles, and metadata together in one container.

```text
movie.mp4
├─ Video track: H.264
├─ Audio track: AAC
├─ Subtitle track
└─ Metadata such as duration
```

MP4 is not a compression method. It is a **container** that holds multiple tracks. H.264 is a video codec that compresses the picture, while AAC is an audio codec that compresses the sound.

| Type | Purpose | Examples |
| --- | --- | --- |
| Container | Brings video, audio, subtitles, and other data together | MP4, MKV, WebM, MOV |
| Video codec | Compresses video and decodes it for playback | MPEG-2, H.264, H.265, AV1 |
| Audio codec | Compresses audio and decodes it for playback | AC-3, AAC, Opus, LPCM |

Creating a video file from DVD-Video removes the DVD menu and its playback control system, then packages the selected title, audio, subtitles, and other desired elements in a form that ordinary video players can handle more easily.

If only the feature is saved to a single MP4, the original DVD’s menus, bonus material, and multiple angles are not automatically carried over. The video file is easier to handle, but it is not the same as preserving the DVD playback system as a whole.

## What changes when DVD content becomes a video file?

There are several ways to store DVD content as digital data, depending on what needs to be preserved.

| Storage method | What it preserves well | Characteristics |
| --- | --- | --- |
| ISO image | The disc’s folder structure, menus, and multiple titles | Close to the original DVD, but requires mounting or ISO-compatible software |
| `VIDEO_TS` folder | VOB, IFO, BUP, and the DVD structure | Requires DVD-aware playback software |
| Remuxed video | Selected video, audio, and subtitles | Changes the container without recompressing the media |
| Transcoded video | The selected feature or other titles | Recompresses to H.264 or another codec for easier playback on devices and the web |

An ISO image is a single file containing the DVD’s file system and recorded files. Open the ISO and you will find the `VIDEO_TS` folder inside it. Saving only the `VIDEO_TS` folder can still preserve the DVD-Video feature, menus, and chapters as long as the required VOB, IFO, and BUP files are all present.

### Remuxing

Remuxing moves video and audio into a different container without recompressing them.

```text
DVD-Video
├─ MPEG-2 video ─┐
├─ AC-3 audio   ──┼─→ MKV or another container
└─ Subtitles    ──┘
```

This makes it easier to retain the original video and audio and is relatively quick. MPEG-2 files can remain large, however, and may be difficult to play in some browsers and on some devices.

### Transcoding

Transcoding recompresses video or audio with a different codec.

```text
MPEG-2 video + AC-3 audio
             ↓ Re-encode
H.264 video + AAC audio
             ↓
           MP4
```

An MP4 containing H.264 video and AAC audio is widely supported by browsers and devices. Recompression does discard information according to the encoding settings. Lowering the bitrate reduces file size, but it may soften edges or introduce block-like artifacts in scenes with a lot of motion.

## Why is a DVD difficult to play directly on the web?

A web browser’s video player normally plays an MP4, WebM, or another video file available at a URL, or data prepared for streaming.

Playing DVD-Video requires software to read multiple VOB and IFO files, follow titles and chapters, and interpret interactions in the DVD menus. Reading sectors from a physical drive also assumes an environment very different from ordinary web video.

```text
DVD player
  └─ Interprets the DVD structure, menus, and playback order

Web browser
  └─ Plays a video file or stream provided at a URL
```

To watch DVD video through a web service, the selected title is therefore generally prepared as a video file that the web can handle.

## Copy protection is separate from the file format

The DVD-Video format and copy-protection systems such as CSS are separate parts of the technology. Two DVD-Video discs can have the same `VIDEO_TS`, VOB, and IFO structure even though one uses copy protection and the other does not.

```text
DVD-Video format
  └─ VOB, IFO, BUP, menus, chapters, and related structures

Technical protection
  └─ CSS, CPRM, and related systems
```

Laws governing the circumvention of copy protection and the reproduction of copyrighted works differ by country and region.

## MP4 makes video easier to manage as a library

A DVD is a well-designed package for presenting a work together with menus. A video file such as an MP4 offers a different set of conveniences:

-   It can be played without an optical drive
-   Titles and descriptions can be assigned to individual files
-   It is easier to use on computers, phones, and tablets
-   It is easier to play in web browsers
-   It is easier to move and back up as a file

## Video formats supported by Tamareel

[Tamareel](/en/) can play video files using the following combination:

<table class="article-summary-table">
  <tbody>
    <tr><th scope="row">Container</th><td>MP4</td></tr>
    <tr><th scope="row">Video codec</th><td>H.264 (AVC)</td></tr>
    <tr><th scope="row">Audio codec</th><td>AAC</td></tr>
  </tbody>
</table>

Tamareel does not play a physical DVD or a `VIDEO_TS` folder directly. Instead, you upload an MP4 file containing H.264 video and AAC audio, then organize and watch it in your private video library.

When preparing a video, check the copyright, license terms, and laws that apply in your country or region, and use the work only within the scope permitted by its rights holder. Circumventing technical protection on a commercial DVD or other work may be prohibited even for private use. Tamareel does not provide DVD ripping or copy-protection circumvention functionality.

## Summary

A typical movie DVD does not store the feature as one video file. Under the DVD-Video specification, MPEG-2 video, audio, subtitles, menus, and playback information are divided among several files.

VOB files contain video and audio, IFO files manage chapters and playback order, and BUP files back up the IFO information. A DVD player combines these separate files to present one continuous work.

Turning DVD content into a video file makes it easier to store, organize, and play the video as an individual file, but it does not automatically preserve the DVD menus or the disc’s complete structure. “Converting a DVD to a video file” is not simply making the disc smaller—it means selecting the required video and audio from the DVD playback system and packaging them in a different structure.

## References

-   [VideoLAN: libdvdnav and libdvdread](https://www.videolan.org/developers/libdvdnav.html)
-   [Library of Congress: ISO Disk Image File Format](https://www.loc.gov/preservation/digital/formats/fdd/fdd000348.shtml)
-   [Library of Congress: MPEG-2 Encoding Family](https://www.loc.gov/preservation/digital/formats/fdd/fdd000335.shtml)
-   [MDN: Web video codec guide](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Video_codecs)

This article reflects technical information and the current Tamareel specifications as of October 2026. DVD structure and playback behavior may vary depending on the disc, recording equipment, and authoring method.
