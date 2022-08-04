# Locomotion API

## Summary

This api returns a json with the current shows for the week or the current day. All the endpoints starts with `/api/`, example `/api/guide`.

## Allowed Methods

Only `GET` is allowed, all other methods will return `405 Method Not Allowed`.

## Endpoints

| Name    | Method | Description                           |
| ------- | ------ | ------------------------------------- |
| `guide` | `GET`  | Returns all the shows for the weekend |
| `day`   | `GET`  | Returns the shows for the current day |
