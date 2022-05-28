# pokTwo API v1.1

The pokTwo API contains various entrypoints to fetch data intended to be used for applications interfacing with pokTwo. It is currently not intended to be used to edit data, and as such requires no authentication to use it. Due to differences with the databases of squareBracket and pokTwo, the resulting JSON will be different due to pokTwo featuring more stuff. Tags are not compatible for now, but we'll try to fix that.

Input arguments are received as GET arguments (`foo.php?bar=baz` where `bar` is an argument for the `foo.php` entrypoint), and output data is sent as JSON encoded data. Input arguments are optional unless stated otherwise.

## /api/v1/video.php
This entrypoint fetches all relevant data for the specified video.

### Input arguments
| field | type    | description                  |
| ----- | ------- | ---------------------------- |
| id    | integer | Public Video ID *(required)* |

### Output data
| field       | type              | description                                                     |
| ----------- | ----------------- | --------------------------------------------------------------- |
| id          | string            | Public Video ID                                                 |
| title       | string            | Video Title                                                     |
| description | string            | Full video description                                          |
| time        | integer           | Unix timestamp of the time the video was uploaded               |
| views       | integer           | Amount of video views                                           |
| videolength | integer           | Length of the video in seconds                                  |
| flags       | videoflags object | Video flags                                                     |
| tags        | string            | Shitty bloated array of tags, fix this later.                   |
| author      | user object       | Author of the video                                             |

### Example output
```json
{
	"id": "ABCdefGHI__",
	"title": "Example Video",
	"description": "This video is exactly two minutes long",
	"time": 1625162716,
	"views": 35,
	"videofile": "videos\/ABCdefGHI__.mpd",
	"videolength": 120,
	"flags": {
		"processing": 0,
		"featured": 1
	},
	"tags": "",
	"author": {
		"username": "ROllerozxa"
	}
}
```

## /api/v1/get_videos.php
This entrypoint fetches all recent videos and the data for the videos.

### Input arguments
| field | type    | description                                    |
| ----- | ------- | ---------------------------------------------- |
| start | integer | Integer to start querying data from            |
| limit | integer | Integer to limit the amount of videos to query |

### Output data
todo: add table

### Example output
```json
{
  "videos": [
    {
      "id": "__9A1ssnr73",
      "title": "Testing Video 2",
      "description": "This is a testing video.",
      "time": 1619437888,
      "views": 0,
      "videofile": "videos/__9A1ssnr73.mpd",
      "videolength": 78,
      "flags": {
        "processing": 0,
        "featured": 0
      },
      "tags": null,
      "author": {
        "username": "icanttellyou"
      }
    },
    {
      "id": "25r__1s5b5n",
      "title": "Testing Video",
      "description": "This is a testing video.",
      "time": 1619437793,
      "views": 1,
      "videofile": "videos/25r__1s5b5n.mpd",
      "videolength": 78,
      "flags": {
        "processing": 0,
        "featured": 0
      },
      "tags": null,
      "author": {
        "username": "icanttellyou"
      }
    }
  ]
}
```
