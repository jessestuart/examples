'use strict'

import * as AWS from 'aws-sdk'
import * as uuid from 'uuid'

const { DynamoDB } = AWS

const dynamoDb = new DynamoDB.DocumentClient()

export const create = (event: any, _context: any, callback: any) => {
  const timestamp = new Date().getTime()
  console.log(event.body)
  const data = JSON.parse(event.body)

  if (typeof data.text !== 'string') {
    console.error('Validation Failed')
    callback(new Error("Couldn't create the todo item."))
    return
  }

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      checked: false,
      createdAt: timestamp,
      id: uuid.v1(),
      text: data.text,
      updatedAt: timestamp,
    },
  }

  // write the todo to the database
  // @ts-ignore
  dynamoDb.put(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error)
      callback(new Error("Couldn't create the todo item."))
      return
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result),
    }
    callback(null, response)
  })
}
