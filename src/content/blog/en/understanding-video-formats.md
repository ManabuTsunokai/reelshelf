---
title: "MP4 Is Not a Compression Format: Video Format Basics"
seoTitle: "What Is MP4? Understanding Video Containers and Codecs | Tamareel"
description: "Learn how MP4, H.264, and AAC differ, along with the containers, codecs, tracks, resolution, frame rate, bitrate, and other factors that determine whether a video plays on the web."
lead: "When you read about video, you quickly encounter names such as MP4, H.264, and AAC. They are not all the same kind of “video format.” Looking at a video file as a set of layers makes it easier to understand why some files will not play and what determines their quality and size."
eyebrow: "VIDEO BASICS"
locale: en
author: "@yanakadev"
publishedAt: 2026-10-01
updatedAt: 2026-10-01
---

## MP4 is not a video compression format

When asked how a video is compressed, someone might look at the end of its filename and answer, “It is an MP4.” MP4, however, is not the name of a video compression method.

MP4 is a **container** that brings video, audio, subtitles, duration information, and other data together in a single file. The video and audio inside it are compressed separately. A **codec** defines the rules for compressing and decoding each of those streams.

For example, the following combination is common on the web:

```text
sample.mp4
├─ Video: compressed with H.264
├─ Audio: compressed with AAC
└─ Metadata such as duration
```

Two files with the same `.mp4` extension may contain H.264 video, H.265 video, or even AV1 video. **Knowing that a file is an MP4 does not, by itself, guarantee that a browser can play it.**

## The difference between containers and codecs

Containers and codecs are easier to understand when their responsibilities are separated.

| Concept | Purpose | Common examples |
| --- | --- | --- |
| Container | Combines video, audio, subtitles, and other data in one file | MP4, WebM, MOV, MKV |
| Video codec | Compresses video data and decodes it for playback | H.264 (AVC), H.265 (HEVC), VP9, AV1 |
| Audio codec | Compresses audio data and decodes it for playback | AAC, Opus, MP3, FLAC |

As an analogy, a container is a box that holds a shipment, while a codec is the method used to make each item fit into less space. Not every kind of item can go into every box: each container supports particular combinations of codecs.

Multiple container formats exist because companies, standards bodies, and open-source projects developed them in different eras, for different uses, and under different licensing policies. MP4 emphasizes compatibility across a wide range of devices, MKV emphasizes the flexibility to hold many kinds of video, audio, subtitles, and metadata, and WebM emphasizes an open format designed for web video.

There are also many video and audio codecs because the priorities—picture and sound quality, compression efficiency, processing cost, latency, licensing, and device support—vary by use case and era. Newer codecs often aim to deliver comparable quality with less data, but they may require more processing power and be supported by fewer devices.

A player needs to do both of the following:

1. Read the container and extract the data inside it
2. Decode the extracted video and audio codecs

If either step is unsupported, the file may open without showing a picture, or the video may play without sound.

## A video file can contain multiple tracks

The video and audio inside a container are stored in units called **streams** or **tracks**. A typical video has one video track and one audio track, but a file can contain several tracks.

```text
movie.mp4
├─ Video track: main picture
├─ Audio track 1: Japanese
├─ Audio track 2: English
├─ Subtitle track 1: Japanese subtitles
└─ Subtitle track 2: English subtitles
```

Playback software reads the container, selects the required tracks, and decodes each one with the appropriate codec. This structure is what allows a single file to offer different audio languages and subtitles.

A container may also store **metadata** such as a title, recording date, rotation, and chapters. Whether a portrait video recorded on a phone appears in the correct orientation can depend not only on the video itself, but also on how its rotation metadata is handled.

## Three factors that determine quality and file size

Even when two videos use the same container and codecs, their quality and file size can differ. Resolution, frame rate, and bitrate are three of the most important factors.

### Resolution

Resolution is the number of pixels in each frame. A resolution of 1920×1080 is known as Full HD, while 3840×2160 is known as 4K. A higher resolution can preserve more detail, but it also means there is more information to compress.

4K does not automatically mean high quality. If the bitrate is too low, edges may lose definition and block-like artifacts may appear in scenes with a lot of motion.

### Frame rate

Frame rate is the number of images shown each second and is measured in frames per second, or fps. Common frame rates include 24fps, 30fps, and 60fps. A higher frame rate can make motion look smoother, but maintaining similar picture quality generally requires more data.

### Bitrate

Bitrate is the amount of video or audio data used per second. With the same codec, resolution, and frame rate, a higher bitrate generally reduces visible compression damage but produces a larger file.

You can estimate the file size with the following formula:

```text
File size ≈ combined video and audio bitrate × duration ÷ 8
```

For example, a ten-minute video with a combined bitrate of 5Mbps will be approximately 375MB. The actual size varies with variable bitrate settings, metadata, and the content of the video.

Codecs also differ in compression efficiency: how little data they can use to produce a similar-looking result. For that reason, bitrate alone is not enough to compare videos encoded with different codecs.

### Keyframes affect compression and seeking

A compressed video contains **keyframes**, which represent complete images, as well as frames that record differences from other frames. The sequence from one keyframe to the next is called a GOP, or Group of Pictures.

Longer intervals between keyframes can improve compression efficiency, but may make seeking and starting playback from the middle of a video more difficult. How a video is compressed over time therefore affects its usability as well as its resolution and bitrate.

## Web playback depends on the full combination

Whether a web browser can play a video is not determined by its file extension alone. At minimum, playback depends on the combination of:

- The container
- The video codec, including its profile and level
- The audio codec
- The bit depth and pixel format
- The decoders available to the browser, operating system, and device

H.264, for example, has profiles such as Baseline, Main, and High. The profile determines which compression features may be used, while the level sets limits such as resolution, frame rate, and bitrate. More demanding settings may not work on older devices. HDR and 10-bit color also require support from the operating system and display, not just the browser.

When targeting a broad range of current browsers, an **MP4 container with H.264 video and AAC audio** is one of the easiest combinations to support. The name MP4 alone, however, does not reveal the codecs inside the file. You ultimately need to test playback in the browsers and devices you intend to use.

### Metadata placement matters in an MP4 for the web

An MP4 contains information about the video's structure and duration in a `moov` box. If this information is at the end of the file, a browser may need to download much more of the video before playback can begin.

Moving the `moov` box near the beginning of the file is commonly called **Web Optimized** or **Fast Start**. It does not change picture quality; it rearranges the file so playback can begin before the entire video has been downloaded.

When the server also supports HTTP Range requests, a browser can request only the parts of the video it needs. This affects seeking and resuming playback, which means that serving a video on the web involves more than the file format alone.

## Tamareel's recommended video format

Tamareel currently checks whether the browser can play a selected video when it is uploaded, then stores and plays supported videos in their original format. The actual combination of container and codecs therefore matters more than whether the filename ends in `.mp4`.

For playback across a wide range of browsers and devices, we recommend the following format:

<table class="article-summary-table">
  <tbody>
    <tr><th scope="row">Container</th><td>MP4</td></tr>
    <tr><th scope="row">Video codec</th><td>H.264 (AVC)</td></tr>
    <tr><th scope="row">Audio codec</th><td>AAC</td></tr>
    <tr><th scope="row">Web setting</th><td>Enable Web Optimized (Fast Start)</td></tr>
  </tbody>
</table>

If Tamareel reports that a selected video cannot be played, convert it with HandBrake's **Fast 1080p30** preset and enable **Web Optimized**. See “[Convert and upload a video](/en/help/convert-and-upload/)” for detailed instructions.

## Summary

The first step toward understanding video formats is to treat containers and codecs as separate concepts. Add tracks, resolution, frame rate, and bitrate, and the relationship between a video's contents, quality, and file size becomes much clearer.

Reliable web playback also depends on browser and device support, codec profiles, color formats, MP4 web optimization, and HTTP Range support on the server. The important point is not that “an MP4 will always play,” but that **playback depends on the combination of the container, its contents, and the playback environment**.

## Sources

- [MDN: Media container formats](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Containers)
- [MDN: Web video codec guide](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Video_codecs)
- [MDN: HTMLMediaElement.canPlayType()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canPlayType)
- [HandBrake Documentation: Official presets](https://handbrake.fr/docs/en/latest/technical/official-presets.html)
- [HandBrake Documentation: Container formats](https://handbrake.fr/docs/en/latest/technical/containers.html)

This article is based on information and Tamareel specifications available in September 2026. Browser and device support, as well as service specifications, may change.
