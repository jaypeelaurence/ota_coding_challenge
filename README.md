# OTA CODING CHALLENGE | Jaypee Laurence Cocjin


## Description
Ota Code Challenge, a note-taking application using TypeScript, Node.js, and Express.

### Node Version:

```
node = v20.11.0 ^
npm = v10.2.4 ^
```

## Libraries & Stacks
```
TypeScript
Node.js
Express
NestJs
DayJs
UuidV4
Database - JSON
```

## Instructions:

#### Install dependencies
``` npm install ```

#### Run on Dev environment
``` npm run start:dev ```

#### Build the application
``` npm run build ```

#### Run on Prod environment
``` npm run start:prod ```


## API Documentation
| Method | Endpoint | Payload |
| --- | --- | ---- |
| GET | /notes | | |
| GET | /notes/```:uuid``` | |
| POST | /notes | ```{ tile: [STRING], content: [STRING] }``` |
| PUT | /notes/```:uuid``` | ```{ tile: [STRING], content: [STRING] }``` |
| DELETE | /notes/```:uuid``` | |

### API Responses
#### GET Note
```
{
  "data": {
      "title": "Note Title",
      "content": "Note content",
      "uuid": "9f0ab33b-f9c1-4838-8fef-2871779a6d08",
      "createdAt": "2024-01-18T19:17:05.784Z",
      "updatedAt": "2024-01-18T19:17:05.784Z"
  }
}
```

#### GET Notes
```
{
    "data": [
        {
            "title": "Note Title 1",
            "content": "Note content",
            "uuid": "9f0ab33b-f9c1-4838-8fef-2871779a6d08",
            "createdAt": "2024-01-18T19:17:05.784Z",
            "updatedAt": "2024-01-18T19:17:05.784Z"
        },
        {
            "title": "Note Title 2",
            "content": "Note content",
            "uuid": "18307159-6d6c-4b37-803e-53b1540f8039",
            "createdAt": "2024-01-18T19:59:36.593Z",
            "updatedAt": "2024-01-18T19:59:36.593Z"
        },
    ],
    "meta": {
        "total": 2
    }
}
```
