/* tslint:disable */
/* eslint-disable */

/*
* ---------------------------------------------------------------
* ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
* ##                                                           ##
* ## AUTHOR: acacode                                           ##
* ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
* ---------------------------------------------------------------
*/


export interface Activity {
  action?: string;
  created_at?: string;
  data?: object;
  id?: number;
  model?: string;
  updated_at?: string;
  user_id?: number;
}

export interface Block {
  block_feeds?: BlockFeed[];
  column?: number;
  description?: string;
  key?: string;
  name?: string;
  row?: number;
  size_x?: number;
  size_y?: number;
  visual_type?: string;
}

export interface BlockFeed {
  feed?: Feed;
  group?: Group;
  id?: string;
}

export interface Dashboard {
  blocks?: Block[];
  description?: string;
  key?: string;
  name?: string;
}

export interface Data {
  completed_at?: string;
  created_at?: string;
  created_epoch?: number;
  ele?: number;
  expiration?: string;
  feed_id?: number;
  group_id?: number;
  id?: string;
  lat?: number;
  lon?: number;
  updated_at?: string;
  value?: string;
}

export interface DataResponse {
  completed_at?: string;
  created_at?: string;
  created_epoch?: number;
  ele?: number;
  expiration?: string;
  feed_id?: number;
  group_id?: number;
  id?: string;
  lat?: number;
  lon?: number;
  updated_at?: string;
  value?: string;
}

export interface Error {
  code?: string;
  message?: string;
}

export interface Feed {
  created_at?: string;
  description?: string;
  
  /**
  * Additional details about this feed.
  */
  details?: { data?: { count?: number, first?: object, last?: object }, shared_with?: object[] };
  enabled?: boolean;
  group?: object;
  groups?: ShallowGroup[];
  history?: boolean;
  id?: number;
  key?: string;
  last_value?: string;
  license?: string;
  name?: string;
  status?: string;
  
  /**
  * Is status notification active?
  */
  status_notify?: boolean;
  
  /**
  * Status notification timeout in minutes.
  */
  status_timeout?: number;
  unit_symbol?: string;
  unit_type?: string;
  updated_at?: string;
  visibility?: "private" | "public";
}

export interface Group {
  created_at?: string;
  description?: string;
  feeds?: Feed[];
  id?: number;
  name?: string;
  updated_at?: string;
}

export interface Permission {
  created_at?: string;
  id?: number;
  model?: "feed" | "group" | "dashboard";
  object_id?: number;
  scope?: "secret" | "public" | "user" | "organization";
  scope_value?: string;
  updated_at?: string;
  user_id?: number;
}

export interface ShallowGroup {
  created_at?: string;
  description?: string;
  id?: number;
  name?: string;
  updated_at?: string;
}

export interface Token {
  token?: string;
}

export interface Trigger {
  name?: string;
}

export interface User {
  color?: string;
  created_at?: string;
  id?: number;
  name?: string;
  time_zone?: string;
  updated_at?: string;
  username?: string;
}

export type RequestParams = Omit<RequestInit, "body" | "method"> & {
  secure?: boolean;
}

type ApiConfig<SecurityDataType> = {
  baseUrl?: string,
  baseApiParams?: RequestParams,
  securityWorker?: (securityData: SecurityDataType) => RequestParams,
}


export namespace user {

  /**
  * @tags Users
  * @name currentUser
  * @summary Get information about the current user
  * @request GET:/user
  */
  export namespace CurrentUser {
    export type RequestQuery = {};
    export type RequestBody = never;
    export type ResponseBody = User;
  }
}
export namespace webhooks {

  /**
  * @tags Webhooks, Data
  * @name createWebhookFeedData
  * @summary Send data to a feed via webhook URL.
  * @request POST:/webhooks/feed/:token
  */
  export namespace CreateWebhookFeedData {
    export type RequestQuery = {};
    export type RequestBody = { value?: string };
    export type ResponseBody = Data;
  }

  /**
  * @tags Webhooks, Data
  * @name createRawWebhookFeedData
  * @summary Send arbitrary data to a feed via webhook URL.
  * @request POST:/webhooks/feed/:token/raw
  * @description The raw data webhook receiver accepts POST requests and stores the raw request body on your feed. This is useful when you don't have control of the webhook sender. If feed history is turned on, payloads will be truncated at 1024 bytes. If feed history is turned off, payloads will be truncated at 100KB.
  */
  export namespace CreateRawWebhookFeedData {
    export type RequestQuery = {};
    export type RequestBody = never;
    export type ResponseBody = Data;
  }
}
export namespace username {

  /**
  * @tags Activities
  * @name destroyActivities
  * @summary All activities for current user
  * @request DELETE:/{username}/activities
  * @description Delete all your activities.
  */
  export namespace DestroyActivities {
    export type RequestQuery = {};
    export type RequestBody = never;
    export type ResponseBody = any;
  }

  /**
  * @tags Activities
  * @name allActivities
  * @summary All activities for current user
  * @request GET:/{username}/activities
  * @description The Activities endpoint returns information about the user's activities.
  */
  export namespace AllActivities {
    export type RequestQuery = { start_time?: string, end_time?: string, limit?: number };
    export type RequestBody = never;
    export type ResponseBody = Activity[];
  }

  /**
  * @tags Activities
  * @name getActivity
  * @summary Get activities by type for current user
  * @request GET:/{username}/activities/{type}
  * @description The Activities endpoint returns information about the user's activities.
  */
  export namespace GetActivity {
    export type RequestQuery = { start_time?: string, end_time?: string, limit?: number };
    export type RequestBody = never;
    export type ResponseBody = Activity[];
  }

  /**
  * @tags Dashboards
  * @name allDashboards
  * @summary All dashboards for current user
  * @request GET:/{username}/dashboards
  * @description The Dashboards endpoint returns information about the user's dashboards.. 
  */
  export namespace AllDashboards {
    export type RequestQuery = {};
    export type RequestBody = never;
    export type ResponseBody = Dashboard[];
  }

  /**
  * @tags Dashboards
  * @name createDashboard
  * @summary Create a new Dashboard
  * @request POST:/{username}/dashboards
  */
  export namespace CreateDashboard {
    export type RequestQuery = {};
    export type RequestBody = any;
    export type ResponseBody = Dashboard;
  }

  /**
  * @tags Blocks
  * @name allBlocks
  * @summary All blocks for current user
  * @request GET:/{username}/dashboards/{dashboard_id}/blocks
  * @description The Blocks endpoint returns information about the user's blocks.. 
  */
  export namespace AllBlocks {
    export type RequestQuery = {};
    export type RequestBody = never;
    export type ResponseBody = Block[];
  }

  /**
  * @tags Blocks
  * @name createBlock
  * @summary Create a new Block
  * @request POST:/{username}/dashboards/{dashboard_id}/blocks
  */
  export namespace CreateBlock {
    export type RequestQuery = {};
    export type RequestBody = any;
    export type ResponseBody = Block;
  }

  /**
  * @tags Blocks
  * @name destroyBlock
  * @summary Delete an existing Block
  * @request DELETE:/{username}/dashboards/{dashboard_id}/blocks/{id}
  */
  export namespace DestroyBlock {
    export type RequestQuery = {};
    export type RequestBody = never;
    export type ResponseBody = string;
  }

  /**
  * @tags Blocks
  * @name getBlock
  * @summary Returns Block based on ID
  * @request GET:/{username}/dashboards/{dashboard_id}/blocks/{id}
  */
  export namespace GetBlock {
    export type RequestQuery = {};
    export type RequestBody = never;
    export type ResponseBody = Block;
  }

  /**
  * @tags Blocks
  * @name updateBlock
  * @summary Update properties of an existing Block
  * @request PATCH:/{username}/dashboards/{dashboard_id}/blocks/{id}
  */
  export namespace UpdateBlock {
    export type RequestQuery = {};
    export type RequestBody = any;
    export type ResponseBody = Block;
  }

  /**
  * @tags Blocks
  * @name replaceBlock
  * @summary Replace an existing Block
  * @request PUT:/{username}/dashboards/{dashboard_id}/blocks/{id}
  */
  export namespace ReplaceBlock {
    export type RequestQuery = {};
    export type RequestBody = any;
    export type ResponseBody = Block;
  }

  /**
  * @tags Dashboards
  * @name destroyDashboard
  * @summary Delete an existing Dashboard
  * @request DELETE:/{username}/dashboards/{id}
  */
  export namespace DestroyDashboard {
    export type RequestQuery = {};
    export type RequestBody = never;
    export type ResponseBody = string;
  }

  /**
  * @tags Dashboards
  * @name getDashboard
  * @summary Returns Dashboard based on ID
  * @request GET:/{username}/dashboards/{id}
  */
  export namespace GetDashboard {
    export type RequestQuery = {};
    export type RequestBody = never;
    export type ResponseBody = Dashboard;
  }

  /**
  * @tags Dashboards
  * @name updateDashboard
  * @summary Update properties of an existing Dashboard
  * @request PATCH:/{username}/dashboards/{id}
  */
  export namespace UpdateDashboard {
    export type RequestQuery = {};
    export type RequestBody = any;
    export type ResponseBody = Dashboard;
  }

  /**
  * @tags Dashboards
  * @name replaceDashboard
  * @summary Replace an existing Dashboard
  * @request PUT:/{username}/dashboards/{id}
  */
  export namespace ReplaceDashboard {
    export type RequestQuery = {};
    export type RequestBody = any;
    export type ResponseBody = Dashboard;
  }

  /**
  * @tags Feeds
  * @name allFeeds
  * @summary All feeds for current user
  * @request GET:/{username}/feeds
  * @description The Feeds endpoint returns information about the user's feeds. The response includes the latest value of each feed, and other metadata about each feed.
  */
  export namespace AllFeeds {
    export type RequestQuery = {};
    export type RequestBody = never;
    export type ResponseBody = Feed[];
  }

  /**
  * @tags Feeds
  * @name createFeed
  * @summary Create a new Feed
  * @request POST:/{username}/feeds
  */
  export namespace CreateFeed {
    export type RequestQuery = { group_key?: string };
    export type RequestBody = any;
    export type ResponseBody = Feed;
  }

  /**
  * @tags Feeds
  * @name destroyFeed
  * @summary Delete an existing Feed
  * @request DELETE:/{username}/feeds/{feed_key}
  */
  export namespace DestroyFeed {
    export type RequestQuery = {};
    export type RequestBody = never;
    export type ResponseBody = any;
  }

  /**
  * @tags Feeds
  * @name getFeed
  * @summary Get feed by feed key
  * @request GET:/{username}/feeds/{feed_key}
  * @description Returns feed based on the feed key
  */
  export namespace GetFeed {
    export type RequestQuery = {};
    export type RequestBody = never;
    export type ResponseBody = Feed;
  }

  /**
  * @tags Feeds
  * @name updateFeed
  * @summary Update properties of an existing Feed
  * @request PATCH:/{username}/feeds/{feed_key}
  */
  export namespace UpdateFeed {
    export type RequestQuery = {};
    export type RequestBody = any;
    export type ResponseBody = Feed;
  }

  /**
  * @tags Feeds
  * @name replaceFeed
  * @summary Replace an existing Feed
  * @request PUT:/{username}/feeds/{feed_key}
  */
  export namespace ReplaceFeed {
    export type RequestQuery = {};
    export type RequestBody = any;
    export type ResponseBody = Feed;
  }

  /**
  * @tags Data
  * @name allData
  * @summary Get all data for the given feed
  * @request GET:/{username}/feeds/{feed_key}/data
  */
  export namespace AllData {
    export type RequestQuery = { start_time?: string, end_time?: string, limit?: number, include?: string };
    export type RequestBody = never;
    export type ResponseBody = DataResponse[];
  }

  /**
  * @tags Data
  * @name createData
  * @summary Create new Data
  * @request POST:/{username}/feeds/{feed_key}/data
  * @description Create new data records on the given feed.. . **NOTE:** when feed history is on, data `value` size is limited to 1KB, when feed history is turned off data value size is limited to 100KB.
  */
  export namespace CreateData {
    export type RequestQuery = {};
    export type RequestBody = any;
    export type ResponseBody = Data;
  }

  /**
  * @tags Data
  * @name batchCreateData
  * @summary Create multiple new Data records
  * @request POST:/{username}/feeds/{feed_key}/data/batch
  */
  export namespace BatchCreateData {
    export type RequestQuery = {};
    export type RequestBody = any;
    export type ResponseBody = DataResponse[];
  }

  /**
  * @tags Data
  * @name chartData
  * @summary Chart data for current feed
  * @request GET:/{username}/feeds/{feed_key}/data/chart
  * @description The Chart API is what we use on io.adafruit.com to populate charts over varying timespans with a consistent number of data points. The maximum number of points returned is 480. This API works by aggregating slices of time into a single value by averaging.. . All time-based parameters are optional, if none are given it will default to 1 hour at the finest-grained resolution possible.
  */
  export namespace ChartData {
    export type RequestQuery = { start_time?: string, end_time?: string, resolution?: number, hours?: number };
    export type RequestBody = never;
    export type ResponseBody = { columns?: string[], data?: string[][], feed?: { id?: number, key?: string, name?: string }, parameters?: object };
  }

  /**
  * @tags Data
  * @name firstData
  * @summary First Data in Queue
  * @request GET:/{username}/feeds/{feed_key}/data/first
  * @description Get the oldest data point in the feed. This request sets the queue pointer to the beginning of the feed.
  */
  export namespace FirstData {
    export type RequestQuery = { include?: string };
    export type RequestBody = never;
    export type ResponseBody = DataResponse;
  }

  /**
  * @tags Data
  * @name lastData
  * @summary Last Data in Queue
  * @request GET:/{username}/feeds/{feed_key}/data/last
  * @description Get the most recent data point in the feed. This request sets the queue pointer to the end of the feed.
  */
  export namespace LastData {
    export type RequestQuery = { include?: string };
    export type RequestBody = never;
    export type ResponseBody = DataResponse;
  }

  /**
  * @tags Data
  * @name nextData
  * @summary Next Data in Queue
  * @request GET:/{username}/feeds/{feed_key}/data/next
  * @description Get the next newest data point in the feed. If queue processing hasn't been started, the first data point in the feed will be returned.
  */
  export namespace NextData {
    export type RequestQuery = { include?: string };
    export type RequestBody = never;
    export type ResponseBody = DataResponse;
  }

  /**
  * @tags Data
  * @name previousData
  * @summary Previous Data in Queue
  * @request GET:/{username}/feeds/{feed_key}/data/previous
  * @description Get the previously processed data point in the feed. NOTE: this method doesn't move the processing queue pointer.
  */
  export namespace PreviousData {
    export type RequestQuery = { include?: string };
    export type RequestBody = never;
    export type ResponseBody = DataResponse;
  }

  /**
  * @tags Data
  * @name retainData
  * @summary Last Data in MQTT CSV format
  * @request GET:/{username}/feeds/{feed_key}/data/retain
  * @description Get the most recent data point in the feed in an MQTT compatible CSV format: `value,lat,lon,ele`
  */
  export namespace RetainData {
    export type RequestQuery = {};
    export type RequestBody = never;
    export type ResponseBody = any;
  }

  /**
  * @tags Data
  * @name destroyData
  * @summary Delete existing Data
  * @request DELETE:/{username}/feeds/{feed_key}/data/{id}
  */
  export namespace DestroyData {
    export type RequestQuery = {};
    export type RequestBody = never;
    export type ResponseBody = string;
  }

  /**
  * @tags Data
  * @name getData
  * @summary Returns data based on feed key
  * @request GET:/{username}/feeds/{feed_key}/data/{id}
  */
  export namespace GetData {
    export type RequestQuery = { include?: string };
    export type RequestBody = never;
    export type ResponseBody = DataResponse;
  }

  /**
  * @tags Data
  * @name updateData
  * @summary Update properties of existing Data
  * @request PATCH:/{username}/feeds/{feed_key}/data/{id}
  */
  export namespace UpdateData {
    export type RequestQuery = {};
    export type RequestBody = any;
    export type ResponseBody = DataResponse;
  }

  /**
  * @tags Data
  * @name replaceData
  * @summary Replace existing Data
  * @request PUT:/{username}/feeds/{feed_key}/data/{id}
  */
  export namespace ReplaceData {
    export type RequestQuery = {};
    export type RequestBody = any;
    export type ResponseBody = DataResponse;
  }

  /**
  * @tags Feeds
  * @name getFeedDetails
  * @summary Get detailed feed by feed key
  * @request GET:/{username}/feeds/{feed_key}/details
  * @description Returns more detailed feed record based on the feed key
  */
  export namespace GetFeedDetails {
    export type RequestQuery = {};
    export type RequestBody = never;
    export type ResponseBody = Feed;
  }

  /**
  * @tags Groups
  * @name allGroups
  * @summary All groups for current user
  * @request GET:/{username}/groups
  * @description The Groups endpoint returns information about the user's groups. The response includes the latest value of each feed in the group, and other metadata about the group.. 
  */
  export namespace AllGroups {
    export type RequestQuery = {};
    export type RequestBody = never;
    export type ResponseBody = Group[];
  }

  /**
  * @tags Groups
  * @name createGroup
  * @summary Create a new Group
  * @request POST:/{username}/groups
  */
  export namespace CreateGroup {
    export type RequestQuery = {};
    export type RequestBody = any;
    export type ResponseBody = Group;
  }

  /**
  * @tags Groups
  * @name destroyGroup
  * @summary Delete an existing Group
  * @request DELETE:/{username}/groups/{group_key}
  */
  export namespace DestroyGroup {
    export type RequestQuery = {};
    export type RequestBody = never;
    export type ResponseBody = string;
  }

  /**
  * @tags Groups
  * @name getGroup
  * @summary Returns Group based on ID
  * @request GET:/{username}/groups/{group_key}
  */
  export namespace GetGroup {
    export type RequestQuery = {};
    export type RequestBody = never;
    export type ResponseBody = Group;
  }

  /**
  * @tags Groups
  * @name updateGroup
  * @summary Update properties of an existing Group
  * @request PATCH:/{username}/groups/{group_key}
  */
  export namespace UpdateGroup {
    export type RequestQuery = {};
    export type RequestBody = any;
    export type ResponseBody = Group;
  }

  /**
  * @tags Groups
  * @name replaceGroup
  * @summary Replace an existing Group
  * @request PUT:/{username}/groups/{group_key}
  */
  export namespace ReplaceGroup {
    export type RequestQuery = {};
    export type RequestBody = any;
    export type ResponseBody = Group;
  }

  /**
  * @tags Groups, Feeds
  * @name addFeedToGroup
  * @summary Add an existing Feed to a Group
  * @request POST:/{username}/groups/{group_key}/add
  */
  export namespace AddFeedToGroup {
    export type RequestQuery = { feed_key?: string };
    export type RequestBody = never;
    export type ResponseBody = Group;
  }

  /**
  * @tags Data
  * @name createGroupData
  * @summary Create new data for multiple feeds in a group
  * @request POST:/{username}/groups/{group_key}/data
  */
  export namespace CreateGroupData {
    export type RequestQuery = {};
    export type RequestBody = { created_at?: string, feeds: Array<{ key: string, value: string }>, location: { ele?: number, lat: number, lon: number } };
    export type ResponseBody = DataResponse[];
  }

  /**
  * @tags Groups, Feeds
  * @name allGroupFeeds
  * @summary All feeds for current user in a given group
  * @request GET:/{username}/groups/{group_key}/feeds
  * @description The Group Feeds endpoint returns information about the user's feeds. The response includes the latest value of each feed, and other metadata about each feed, but only for feeds within the given group.
  */
  export namespace AllGroupFeeds {
    export type RequestQuery = {};
    export type RequestBody = never;
    export type ResponseBody = Feed[];
  }

  /**
  * @tags Feeds
  * @name createGroupFeed
  * @summary Create a new Feed in a Group
  * @request POST:/{username}/groups/{group_key}/feeds
  */
  export namespace CreateGroupFeed {
    export type RequestQuery = {};
    export type RequestBody = any;
    export type ResponseBody = Feed;
  }

  /**
  * @tags Data
  * @name allGroupFeedData
  * @summary All data for current feed in a specific group
  * @request GET:/{username}/groups/{group_key}/feeds/{feed_key}/data
  */
  export namespace AllGroupFeedData {
    export type RequestQuery = { start_time?: string, end_time?: string, limit?: number };
    export type RequestBody = never;
    export type ResponseBody = DataResponse[];
  }

  /**
  * @tags Data
  * @name createGroupFeedData
  * @summary Create new Data in a feed belonging to a particular group
  * @request POST:/{username}/groups/{group_key}/feeds/{feed_key}/data
  */
  export namespace CreateGroupFeedData {
    export type RequestQuery = {};
    export type RequestBody = any;
    export type ResponseBody = DataResponse;
  }

  /**
  * @tags Data
  * @name batchCreateGroupFeedData
  * @summary Create multiple new Data records in a feed belonging to a particular group
  * @request POST:/{username}/groups/{group_key}/feeds/{feed_key}/data/batch
  */
  export namespace BatchCreateGroupFeedData {
    export type RequestQuery = {};
    export type RequestBody = any;
    export type ResponseBody = DataResponse[];
  }

  /**
  * @tags Groups, Feeds
  * @name removeFeedFromGroup
  * @summary Remove a Feed from a Group
  * @request POST:/{username}/groups/{group_key}/remove
  */
  export namespace RemoveFeedFromGroup {
    export type RequestQuery = { feed_key?: string };
    export type RequestBody = never;
    export type ResponseBody = Group;
  }

  /**
  * @tags Users
  * @name getCurrentUserThrottle
  * @summary Get the user's data rate limit and current activity level.
  * @request GET:/{username}/throttle
  */
  export namespace GetCurrentUserThrottle {
    export type RequestQuery = {};
    export type RequestBody = never;
    export type ResponseBody = { active_data_rate?: number, data_rate_limit?: number };
  }

  /**
  * @tags Tokens
  * @name allTokens
  * @summary All tokens for current user
  * @request GET:/{username}/tokens
  * @description The Tokens endpoint returns information about the user's tokens.. 
  */
  export namespace AllTokens {
    export type RequestQuery = {};
    export type RequestBody = never;
    export type ResponseBody = Token[];
  }

  /**
  * @tags Tokens
  * @name createToken
  * @summary Create a new Token
  * @request POST:/{username}/tokens
  */
  export namespace CreateToken {
    export type RequestQuery = {};
    export type RequestBody = any;
    export type ResponseBody = Token;
  }

  /**
  * @tags Tokens
  * @name destroyToken
  * @summary Delete an existing Token
  * @request DELETE:/{username}/tokens/{id}
  */
  export namespace DestroyToken {
    export type RequestQuery = {};
    export type RequestBody = never;
    export type ResponseBody = string;
  }

  /**
  * @tags Tokens
  * @name getToken
  * @summary Returns Token based on ID
  * @request GET:/{username}/tokens/{id}
  */
  export namespace GetToken {
    export type RequestQuery = {};
    export type RequestBody = never;
    export type ResponseBody = Token;
  }

  /**
  * @tags Tokens
  * @name updateToken
  * @summary Update properties of an existing Token
  * @request PATCH:/{username}/tokens/{id}
  */
  export namespace UpdateToken {
    export type RequestQuery = {};
    export type RequestBody = any;
    export type ResponseBody = Token;
  }

  /**
  * @tags Tokens
  * @name replaceToken
  * @summary Replace an existing Token
  * @request PUT:/{username}/tokens/{id}
  */
  export namespace ReplaceToken {
    export type RequestQuery = {};
    export type RequestBody = any;
    export type ResponseBody = Token;
  }

  /**
  * @tags Triggers
  * @name allTriggers
  * @summary All triggers for current user
  * @request GET:/{username}/triggers
  * @description The Triggers endpoint returns information about the user's triggers.. 
  */
  export namespace AllTriggers {
    export type RequestQuery = {};
    export type RequestBody = never;
    export type ResponseBody = Trigger[];
  }

  /**
  * @tags Triggers
  * @name createTrigger
  * @summary Create a new Trigger
  * @request POST:/{username}/triggers
  */
  export namespace CreateTrigger {
    export type RequestQuery = {};
    export type RequestBody = any;
    export type ResponseBody = Trigger;
  }

  /**
  * @tags Triggers
  * @name destroyTrigger
  * @summary Delete an existing Trigger
  * @request DELETE:/{username}/triggers/{id}
  */
  export namespace DestroyTrigger {
    export type RequestQuery = {};
    export type RequestBody = never;
    export type ResponseBody = string;
  }

  /**
  * @tags Triggers
  * @name getTrigger
  * @summary Returns Trigger based on ID
  * @request GET:/{username}/triggers/{id}
  */
  export namespace GetTrigger {
    export type RequestQuery = {};
    export type RequestBody = never;
    export type ResponseBody = Trigger;
  }

  /**
  * @tags Triggers
  * @name updateTrigger
  * @summary Update properties of an existing Trigger
  * @request PATCH:/{username}/triggers/{id}
  */
  export namespace UpdateTrigger {
    export type RequestQuery = {};
    export type RequestBody = any;
    export type ResponseBody = Trigger;
  }

  /**
  * @tags Triggers
  * @name replaceTrigger
  * @summary Replace an existing Trigger
  * @request PUT:/{username}/triggers/{id}
  */
  export namespace ReplaceTrigger {
    export type RequestQuery = {};
    export type RequestBody = any;
    export type ResponseBody = Trigger;
  }

  /**
  * @tags Permissions
  * @name allPermissions
  * @summary All permissions for current user and type
  * @request GET:/{username}/{type}/{type_id}/acl
  * @description The Permissions endpoint returns information about the user's permissions.. 
  */
  export namespace AllPermissions {
    export type RequestQuery = {};
    export type RequestBody = never;
    export type ResponseBody = Permission[];
  }

  /**
  * @tags Permissions
  * @name createPermission
  * @summary Create a new Permission
  * @request POST:/{username}/{type}/{type_id}/acl
  */
  export namespace CreatePermission {
    export type RequestQuery = {};
    export type RequestBody = any;
    export type ResponseBody = Permission;
  }

  /**
  * @tags Permissions
  * @name destroyPermission
  * @summary Delete an existing Permission
  * @request DELETE:/{username}/{type}/{type_id}/acl/{id}
  */
  export namespace DestroyPermission {
    export type RequestQuery = {};
    export type RequestBody = never;
    export type ResponseBody = string;
  }

  /**
  * @tags Permissions
  * @name getPermission
  * @summary Returns Permission based on ID
  * @request GET:/{username}/{type}/{type_id}/acl/{id}
  */
  export namespace GetPermission {
    export type RequestQuery = {};
    export type RequestBody = never;
    export type ResponseBody = Permission;
  }

  /**
  * @tags Permissions
  * @name updatePermission
  * @summary Update properties of an existing Permission
  * @request PATCH:/{username}/{type}/{type_id}/acl/{id}
  */
  export namespace UpdatePermission {
    export type RequestQuery = {};
    export type RequestBody = any;
    export type ResponseBody = Permission;
  }

  /**
  * @tags Permissions
  * @name replacePermission
  * @summary Replace an existing Permission
  * @request PUT:/{username}/{type}/{type_id}/acl/{id}
  */
  export namespace ReplacePermission {
    export type RequestQuery = {};
    export type RequestBody = any;
    export type ResponseBody = Permission;
  }
}

/** ### The Internet of Things for Everyone

The Adafruit IO HTTP API provides access to your Adafruit IO data from any programming language or hardware environment that can speak HTTP. The easiest way to get started is with [an Adafruit IO learn guide](https://learn.adafruit.com/series/adafruit-io-basics) and [a simple Internet of Things capable device like the Feather Huzzah](https://www.adafruit.com/product/2821).

This API documentation is hosted on GitHub Pages and is available at [https://github.com/adafruit/io-api](https://github.com/adafruit/io-api). For questions or comments visit the [Adafruit IO Forums](https://forums.adafruit.com/viewforum.php?f=56) or the [adafruit-io channel on the Adafruit Discord server](https://discord.gg/adafruit).

#### Authentication

Authentication for every API request happens through the `X-AIO-Key` header or query parameter and your IO API key. A simple cURL request to get all available feeds for a user with the username "io_username" and the key "io_key_12345" could look like this:

    $ curl -H "X-AIO-Key: io_key_12345" https://io.adafruit.com/api/v2/io_username/feeds

Or like this:

    $ curl "https://io.adafruit.com/api/v2/io_username/feeds?X-AIO-Key=io_key_12345

Using the node.js [request](https://github.com/request/request) library, IO HTTP requests are as easy as:

```js
var request = require('request');

var options = {
  url: 'https://io.adafruit.com/api/v2/io_username/feeds',
  headers: {
    'X-AIO-Key': 'io_key_12345',
    'Content-Type': 'application/json'
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var feeds = JSON.parse(body);
    console.log(feeds.length + " FEEDS AVAILABLE");

    feeds.forEach(function (feed) {
      console.log(feed.name, feed.key);
    })
  }
}

request(options, callback);
```

Using the ESP8266 Arduino HTTPClient library, an HTTPS GET request would look like this (replacing `---` with your own values in the appropriate locations):

```arduino
/// based on
/// https://github.com/esp8266/Arduino/blob/master/libraries/ESP8266HTTPClient/examples/Authorization/Authorization.ino

#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>
#include <ESP8266HTTPClient.h>

ESP8266WiFiMulti WiFiMulti;

const char* ssid = "---";
const char* password = "---";

const char* host = "io.adafruit.com";

const char* io_key = "---";
const char* path_with_username = "/api/v2/---/dashboards";

// Use web browser to view and copy
// SHA1 fingerprint of the certificate
const char* fingerprint = "77 00 54 2D DA E7 D8 03 27 31 23 99 EB 27 DB CB A5 4C 57 18";

void setup() {
  Serial.begin(115200);

  for(uint8_t t = 4; t > 0; t--) {
    Serial.printf("[SETUP] WAIT %d...\n", t);
    Serial.flush();
    delay(1000);
  }

  WiFi.mode(WIFI_STA);
  WiFiMulti.addAP(ssid, password);

  // wait for WiFi connection
  while(WiFiMulti.run() != WL_CONNECTED) {
    Serial.print('.');
    delay(1000);
  }

  Serial.println("[WIFI] connected!");

  HTTPClient http;

  // start request with URL and TLS cert fingerprint for verification
  http.begin("https://" + String(host) + String(path_with_username), fingerprint);

  // IO API authentication
  http.addHeader("X-AIO-Key", io_key);

  // start connection and send HTTP header
  int httpCode = http.GET();

  // httpCode will be negative on error
  if(httpCode > 0) {
    // HTTP header has been send and Server response header has been handled
    Serial.printf("[HTTP] GET response: %d\n", httpCode);

    // HTTP 200 OK
    if(httpCode == HTTP_CODE_OK) {
      String payload = http.getString();
      Serial.println(payload);
    }

    http.end();
  }
}

void loop() {}
```

#### Client Libraries

We have client libraries to help you get started with your project: [Python](https://github.com/adafruit/io-client-python), [Ruby](https://github.com/adafruit/io-client-ruby), [Arduino C++](https://github.com/adafruit/Adafruit_IO_Arduino), [Javascript](https://github.com/adafruit/adafruit-io-node), and [Go](https://github.com/adafruit/io-client-go) are available. They're all open source, so if they don't already do what you want, you can fork and add any feature you'd like.

 */
export class Api<SecurityDataType> {
  
  public baseUrl = "https://io.adafruit.com/api/v2";
  public title = "Adafruit IO";
  public version = "2.0.0";

  private securityData: SecurityDataType = (null as any);
  private securityWorker: ApiConfig<SecurityDataType>["securityWorker"] = (() => {}) as any
  
  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  }

  constructor({ baseUrl,baseApiParams,securityWorker, }: ApiConfig<SecurityDataType> = {}) {
    this.baseUrl = baseUrl || this.baseUrl;
    this.baseApiParams = baseApiParams || this.baseApiParams;
    this.securityWorker = securityWorker || this.securityWorker;
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data
  }

  private addQueryParams(query: object): string {
    const keys = Object.keys(query);
    return keys.length ? (
      '?' +
      keys.reduce((paramsArray, param) => [
        ...paramsArray,
        param + '=' + encodeURIComponent(query[param])
      ], []).join('&')
    ) : ''
  }

  private mergeRequestOptions(params: RequestParams, securityParams?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params,
      ...(securityParams || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params.headers || {}),
        ...((securityParams && securityParams.headers) || {})
      }
    }
  }
  
  private safeParseResponse = <T = any>(response: Response): Promise<T> =>
    response.json()
      .then(data => data)
      .catch(e => response.text);
  
  public request = <T = any>(
    path: string,
    method: string,
    { secure, ...params }: RequestParams = {},
    body?: any,
    secureByDefault?: boolean,
  ): Promise<T> =>
    fetch(`${this.baseUrl}${path}`, {
      // @ts-ignore
      ...this.mergeRequestOptions(params, (secureByDefault || secure) && this.securityWorker(this.securityData)),
      method,
      body: body ? JSON.stringify(body) : null,
    }).then(async response => {
      const data = await this.safeParseResponse<T>(response);
      if (!response.ok) throw data
      return data
    })



  user = {


    /**
    * @tags Users
    * @name currentUser
    * @summary Get information about the current user
    * @request GET:/user
    */
    currentUser: (params?: RequestParams) =>
      this.request<User>(`/user`, "GET", params, null),
  }
  webhooks = {


    /**
    * @tags Webhooks, Data
    * @name createWebhookFeedData
    * @summary Send data to a feed via webhook URL.
    * @request POST:/webhooks/feed/:token
    */
    createWebhookFeedData: (payload: { value?: string }, params?: RequestParams) =>
      this.request<Data>(`/webhooks/feed/:token`, "POST", params, payload),


    /**
    * @tags Webhooks, Data
    * @name createRawWebhookFeedData
    * @summary Send arbitrary data to a feed via webhook URL.
    * @request POST:/webhooks/feed/:token/raw
    * @description The raw data webhook receiver accepts POST requests and stores the raw request body on your feed. This is useful when you don't have control of the webhook sender. If feed history is turned on, payloads will be truncated at 1024 bytes. If feed history is turned off, payloads will be truncated at 100KB.
    */
    createRawWebhookFeedData: (params?: RequestParams) =>
      this.request<Data>(`/webhooks/feed/:token/raw`, "POST", params, null),
  }
  username = {


    /**
    * @tags Activities
    * @name destroyActivities
    * @summary All activities for current user
    * @request DELETE:/{username}/activities
    * @description Delete all your activities.
    */
    destroyActivities: (username: string, params?: RequestParams) =>
      this.request<any>(`/${username}/activities`, "DELETE", params, null),


    /**
    * @tags Activities
    * @name allActivities
    * @summary All activities for current user
    * @request GET:/{username}/activities
    * @description The Activities endpoint returns information about the user's activities.
    */
    allActivities: (username: string, query: { start_time?: string, end_time?: string, limit?: number }, params?: RequestParams) =>
      this.request<Activity[]>(`/${username}/activities${this.addQueryParams(query)}`, "GET", params, null),


    /**
    * @tags Activities
    * @name getActivity
    * @summary Get activities by type for current user
    * @request GET:/{username}/activities/{type}
    * @description The Activities endpoint returns information about the user's activities.
    */
    getActivity: (username: string, type: string, query: { start_time?: string, end_time?: string, limit?: number }, params?: RequestParams) =>
      this.request<Activity[]>(`/${username}/activities/${type}${this.addQueryParams(query)}`, "GET", params, null),


    /**
    * @tags Dashboards
    * @name allDashboards
    * @summary All dashboards for current user
    * @request GET:/{username}/dashboards
    * @description The Dashboards endpoint returns information about the user's dashboards.. 
    */
    allDashboards: (username: string, params?: RequestParams) =>
      this.request<Dashboard[]>(`/${username}/dashboards`, "GET", params, null),


    /**
    * @tags Dashboards
    * @name createDashboard
    * @summary Create a new Dashboard
    * @request POST:/{username}/dashboards
    */
    createDashboard: (username: string, dashboard: any, params?: RequestParams) =>
      this.request<Dashboard>(`/${username}/dashboards`, "POST", params, dashboard),


    /**
    * @tags Blocks
    * @name allBlocks
    * @summary All blocks for current user
    * @request GET:/{username}/dashboards/{dashboard_id}/blocks
    * @description The Blocks endpoint returns information about the user's blocks.. 
    */
    allBlocks: (username: string, dashboard_id: string, params?: RequestParams) =>
      this.request<Block[]>(`/${username}/dashboards/${dashboard_id}/blocks`, "GET", params, null),


    /**
    * @tags Blocks
    * @name createBlock
    * @summary Create a new Block
    * @request POST:/{username}/dashboards/{dashboard_id}/blocks
    */
    createBlock: (username: string, dashboard_id: string, block: any, params?: RequestParams) =>
      this.request<Block>(`/${username}/dashboards/${dashboard_id}/blocks`, "POST", params, block),


    /**
    * @tags Blocks
    * @name destroyBlock
    * @summary Delete an existing Block
    * @request DELETE:/{username}/dashboards/{dashboard_id}/blocks/{id}
    */
    destroyBlock: (username: string, dashboard_id: string, id: string, params?: RequestParams) =>
      this.request<string>(`/${username}/dashboards/${dashboard_id}/blocks/${id}`, "DELETE", params, null),


    /**
    * @tags Blocks
    * @name getBlock
    * @summary Returns Block based on ID
    * @request GET:/{username}/dashboards/{dashboard_id}/blocks/{id}
    */
    getBlock: (username: string, dashboard_id: string, id: string, params?: RequestParams) =>
      this.request<Block>(`/${username}/dashboards/${dashboard_id}/blocks/${id}`, "GET", params, null),


    /**
    * @tags Blocks
    * @name updateBlock
    * @summary Update properties of an existing Block
    * @request PATCH:/{username}/dashboards/{dashboard_id}/blocks/{id}
    */
    updateBlock: (username: string, dashboard_id: string, id: string, block: any, params?: RequestParams) =>
      this.request<Block>(`/${username}/dashboards/${dashboard_id}/blocks/${id}`, "PATCH", params, block),


    /**
    * @tags Blocks
    * @name replaceBlock
    * @summary Replace an existing Block
    * @request PUT:/{username}/dashboards/{dashboard_id}/blocks/{id}
    */
    replaceBlock: (username: string, dashboard_id: string, id: string, block: any, params?: RequestParams) =>
      this.request<Block>(`/${username}/dashboards/${dashboard_id}/blocks/${id}`, "PUT", params, block),


    /**
    * @tags Dashboards
    * @name destroyDashboard
    * @summary Delete an existing Dashboard
    * @request DELETE:/{username}/dashboards/{id}
    */
    destroyDashboard: (username: string, id: string, params?: RequestParams) =>
      this.request<string>(`/${username}/dashboards/${id}`, "DELETE", params, null),


    /**
    * @tags Dashboards
    * @name getDashboard
    * @summary Returns Dashboard based on ID
    * @request GET:/{username}/dashboards/{id}
    */
    getDashboard: (username: string, id: string, params?: RequestParams) =>
      this.request<Dashboard>(`/${username}/dashboards/${id}`, "GET", params, null),


    /**
    * @tags Dashboards
    * @name updateDashboard
    * @summary Update properties of an existing Dashboard
    * @request PATCH:/{username}/dashboards/{id}
    */
    updateDashboard: (username: string, id: string, dashboard: any, params?: RequestParams) =>
      this.request<Dashboard>(`/${username}/dashboards/${id}`, "PATCH", params, dashboard),


    /**
    * @tags Dashboards
    * @name replaceDashboard
    * @summary Replace an existing Dashboard
    * @request PUT:/{username}/dashboards/{id}
    */
    replaceDashboard: (username: string, id: string, dashboard: any, params?: RequestParams) =>
      this.request<Dashboard>(`/${username}/dashboards/${id}`, "PUT", params, dashboard),


    /**
    * @tags Feeds
    * @name allFeeds
    * @summary All feeds for current user
    * @request GET:/{username}/feeds
    * @description The Feeds endpoint returns information about the user's feeds. The response includes the latest value of each feed, and other metadata about each feed.
    */
    allFeeds: (username: string, params?: RequestParams) =>
      this.request<Feed[]>(`/${username}/feeds`, "GET", params, null),


    /**
    * @tags Feeds
    * @name createFeed
    * @summary Create a new Feed
    * @request POST:/{username}/feeds
    */
    createFeed: (username: string, query: { group_key?: string }, feed: any, params?: RequestParams) =>
      this.request<Feed>(`/${username}/feeds${this.addQueryParams(query)}`, "POST", params, feed),


    /**
    * @tags Feeds
    * @name destroyFeed
    * @summary Delete an existing Feed
    * @request DELETE:/{username}/feeds/{feed_key}
    */
    destroyFeed: (username: string, feed_key: string, params?: RequestParams) =>
      this.request<any>(`/${username}/feeds/${feed_key}`, "DELETE", params, null),


    /**
    * @tags Feeds
    * @name getFeed
    * @summary Get feed by feed key
    * @request GET:/{username}/feeds/{feed_key}
    * @description Returns feed based on the feed key
    */
    getFeed: (username: string, feed_key: string, params?: RequestParams) =>
      this.request<Feed>(`/${username}/feeds/${feed_key}`, "GET", params, null),


    /**
    * @tags Feeds
    * @name updateFeed
    * @summary Update properties of an existing Feed
    * @request PATCH:/{username}/feeds/{feed_key}
    */
    updateFeed: (username: string, feed_key: string, feed: any, params?: RequestParams) =>
      this.request<Feed>(`/${username}/feeds/${feed_key}`, "PATCH", params, feed),


    /**
    * @tags Feeds
    * @name replaceFeed
    * @summary Replace an existing Feed
    * @request PUT:/{username}/feeds/{feed_key}
    */
    replaceFeed: (username: string, feed_key: string, feed: any, params?: RequestParams) =>
      this.request<Feed>(`/${username}/feeds/${feed_key}`, "PUT", params, feed),


    /**
    * @tags Data
    * @name allData
    * @summary Get all data for the given feed
    * @request GET:/{username}/feeds/{feed_key}/data
    */
    allData: (username: string, feed_key: string, query: { start_time?: string, end_time?: string, limit?: number, include?: string }, params?: RequestParams) =>
      this.request<DataResponse[]>(`/${username}/feeds/${feed_key}/data${this.addQueryParams(query)}`, "GET", params, null),


    /**
    * @tags Data
    * @name createData
    * @summary Create new Data
    * @request POST:/{username}/feeds/{feed_key}/data
    * @description Create new data records on the given feed.. . **NOTE:** when feed history is on, data `value` size is limited to 1KB, when feed history is turned off data value size is limited to 100KB.
    */
    createData: (username: string, feed_key: string, datum: any, params?: RequestParams) =>
      this.request<Data>(`/${username}/feeds/${feed_key}/data`, "POST", params, datum),


    /**
    * @tags Data
    * @name batchCreateData
    * @summary Create multiple new Data records
    * @request POST:/{username}/feeds/{feed_key}/data/batch
    */
    batchCreateData: (username: string, feed_key: string, data: any, params?: RequestParams) =>
      this.request<DataResponse[]>(`/${username}/feeds/${feed_key}/data/batch`, "POST", params, data),


    /**
    * @tags Data
    * @name chartData
    * @summary Chart data for current feed
    * @request GET:/{username}/feeds/{feed_key}/data/chart
    * @description The Chart API is what we use on io.adafruit.com to populate charts over varying timespans with a consistent number of data points. The maximum number of points returned is 480. This API works by aggregating slices of time into a single value by averaging.. . All time-based parameters are optional, if none are given it will default to 1 hour at the finest-grained resolution possible.
    */
    chartData: (username: string, feed_key: string, query: { start_time?: string, end_time?: string, resolution?: number, hours?: number }, params?: RequestParams) =>
      this.request<{ columns?: string[], data?: string[][], feed?: { id?: number, key?: string, name?: string }, parameters?: object }>(`/${username}/feeds/${feed_key}/data/chart${this.addQueryParams(query)}`, "GET", params, null),


    /**
    * @tags Data
    * @name firstData
    * @summary First Data in Queue
    * @request GET:/{username}/feeds/{feed_key}/data/first
    * @description Get the oldest data point in the feed. This request sets the queue pointer to the beginning of the feed.
    */
    firstData: (username: string, feed_key: string, query: { include?: string }, params?: RequestParams) =>
      this.request<DataResponse>(`/${username}/feeds/${feed_key}/data/first${this.addQueryParams(query)}`, "GET", params, null),


    /**
    * @tags Data
    * @name lastData
    * @summary Last Data in Queue
    * @request GET:/{username}/feeds/{feed_key}/data/last
    * @description Get the most recent data point in the feed. This request sets the queue pointer to the end of the feed.
    */
    lastData: (username: string, feed_key: string, query: { include?: string }, params?: RequestParams) =>
      this.request<DataResponse>(`/${username}/feeds/${feed_key}/data/last${this.addQueryParams(query)}`, "GET", params, null),


    /**
    * @tags Data
    * @name nextData
    * @summary Next Data in Queue
    * @request GET:/{username}/feeds/{feed_key}/data/next
    * @description Get the next newest data point in the feed. If queue processing hasn't been started, the first data point in the feed will be returned.
    */
    nextData: (username: string, feed_key: string, query: { include?: string }, params?: RequestParams) =>
      this.request<DataResponse>(`/${username}/feeds/${feed_key}/data/next${this.addQueryParams(query)}`, "GET", params, null),


    /**
    * @tags Data
    * @name previousData
    * @summary Previous Data in Queue
    * @request GET:/{username}/feeds/{feed_key}/data/previous
    * @description Get the previously processed data point in the feed. NOTE: this method doesn't move the processing queue pointer.
    */
    previousData: (username: string, feed_key: string, query: { include?: string }, params?: RequestParams) =>
      this.request<DataResponse>(`/${username}/feeds/${feed_key}/data/previous${this.addQueryParams(query)}`, "GET", params, null),


    /**
    * @tags Data
    * @name retainData
    * @summary Last Data in MQTT CSV format
    * @request GET:/{username}/feeds/{feed_key}/data/retain
    * @description Get the most recent data point in the feed in an MQTT compatible CSV format: `value,lat,lon,ele`
    */
    retainData: (username: string, feed_key: string, params?: RequestParams) =>
      this.request<any>(`/${username}/feeds/${feed_key}/data/retain`, "GET", params, null),


    /**
    * @tags Data
    * @name destroyData
    * @summary Delete existing Data
    * @request DELETE:/{username}/feeds/{feed_key}/data/{id}
    */
    destroyData: (username: string, feed_key: string, id: string, params?: RequestParams) =>
      this.request<string>(`/${username}/feeds/${feed_key}/data/${id}`, "DELETE", params, null),


    /**
    * @tags Data
    * @name getData
    * @summary Returns data based on feed key
    * @request GET:/{username}/feeds/{feed_key}/data/{id}
    */
    getData: (username: string, feed_key: string, id: string, query: { include?: string }, params?: RequestParams) =>
      this.request<DataResponse>(`/${username}/feeds/${feed_key}/data/${id}${this.addQueryParams(query)}`, "GET", params, null),


    /**
    * @tags Data
    * @name updateData
    * @summary Update properties of existing Data
    * @request PATCH:/{username}/feeds/{feed_key}/data/{id}
    */
    updateData: (username: string, feed_key: string, id: string, datum: any, params?: RequestParams) =>
      this.request<DataResponse>(`/${username}/feeds/${feed_key}/data/${id}`, "PATCH", params, datum),


    /**
    * @tags Data
    * @name replaceData
    * @summary Replace existing Data
    * @request PUT:/{username}/feeds/{feed_key}/data/{id}
    */
    replaceData: (username: string, feed_key: string, id: string, datum: any, params?: RequestParams) =>
      this.request<DataResponse>(`/${username}/feeds/${feed_key}/data/${id}`, "PUT", params, datum),


    /**
    * @tags Feeds
    * @name getFeedDetails
    * @summary Get detailed feed by feed key
    * @request GET:/{username}/feeds/{feed_key}/details
    * @description Returns more detailed feed record based on the feed key
    */
    getFeedDetails: (username: string, feed_key: string, params?: RequestParams) =>
      this.request<Feed>(`/${username}/feeds/${feed_key}/details`, "GET", params, null),


    /**
    * @tags Groups
    * @name allGroups
    * @summary All groups for current user
    * @request GET:/{username}/groups
    * @description The Groups endpoint returns information about the user's groups. The response includes the latest value of each feed in the group, and other metadata about the group.. 
    */
    allGroups: (username: string, params?: RequestParams) =>
      this.request<Group[]>(`/${username}/groups`, "GET", params, null),


    /**
    * @tags Groups
    * @name createGroup
    * @summary Create a new Group
    * @request POST:/{username}/groups
    */
    createGroup: (username: string, group: any, params?: RequestParams) =>
      this.request<Group>(`/${username}/groups`, "POST", params, group),


    /**
    * @tags Groups
    * @name destroyGroup
    * @summary Delete an existing Group
    * @request DELETE:/{username}/groups/{group_key}
    */
    destroyGroup: (username: string, group_key: string, params?: RequestParams) =>
      this.request<string>(`/${username}/groups/${group_key}`, "DELETE", params, null),


    /**
    * @tags Groups
    * @name getGroup
    * @summary Returns Group based on ID
    * @request GET:/{username}/groups/{group_key}
    */
    getGroup: (username: string, group_key: string, params?: RequestParams) =>
      this.request<Group>(`/${username}/groups/${group_key}`, "GET", params, null),


    /**
    * @tags Groups
    * @name updateGroup
    * @summary Update properties of an existing Group
    * @request PATCH:/{username}/groups/{group_key}
    */
    updateGroup: (username: string, group_key: string, group: any, params?: RequestParams) =>
      this.request<Group>(`/${username}/groups/${group_key}`, "PATCH", params, group),


    /**
    * @tags Groups
    * @name replaceGroup
    * @summary Replace an existing Group
    * @request PUT:/{username}/groups/{group_key}
    */
    replaceGroup: (username: string, group_key: string, group: any, params?: RequestParams) =>
      this.request<Group>(`/${username}/groups/${group_key}`, "PUT", params, group),


    /**
    * @tags Groups, Feeds
    * @name addFeedToGroup
    * @summary Add an existing Feed to a Group
    * @request POST:/{username}/groups/{group_key}/add
    */
    addFeedToGroup: (group_key: string, username: string, query: { feed_key?: string }, params?: RequestParams) =>
      this.request<Group>(`/${username}/groups/${group_key}/add${this.addQueryParams(query)}`, "POST", params, null),


    /**
    * @tags Data
    * @name createGroupData
    * @summary Create new data for multiple feeds in a group
    * @request POST:/{username}/groups/{group_key}/data
    */
    createGroupData: (username: string, group_key: string, group_feed_data: { created_at?: string, feeds: Array<{ key: string, value: string }>, location: { ele?: number, lat: number, lon: number } }, params?: RequestParams) =>
      this.request<DataResponse[]>(`/${username}/groups/${group_key}/data`, "POST", params, group_feed_data),


    /**
    * @tags Groups, Feeds
    * @name allGroupFeeds
    * @summary All feeds for current user in a given group
    * @request GET:/{username}/groups/{group_key}/feeds
    * @description The Group Feeds endpoint returns information about the user's feeds. The response includes the latest value of each feed, and other metadata about each feed, but only for feeds within the given group.
    */
    allGroupFeeds: (group_key: string, username: string, params?: RequestParams) =>
      this.request<Feed[]>(`/${username}/groups/${group_key}/feeds`, "GET", params, null),


    /**
    * @tags Feeds
    * @name createGroupFeed
    * @summary Create a new Feed in a Group
    * @request POST:/{username}/groups/{group_key}/feeds
    */
    createGroupFeed: (username: string, group_key: string, feed: any, params?: RequestParams) =>
      this.request<Feed>(`/${username}/groups/${group_key}/feeds`, "POST", params, feed),


    /**
    * @tags Data
    * @name allGroupFeedData
    * @summary All data for current feed in a specific group
    * @request GET:/{username}/groups/{group_key}/feeds/{feed_key}/data
    */
    allGroupFeedData: (username: string, group_key: string, feed_key: string, query: { start_time?: string, end_time?: string, limit?: number }, params?: RequestParams) =>
      this.request<DataResponse[]>(`/${username}/groups/${group_key}/feeds/${feed_key}/data${this.addQueryParams(query)}`, "GET", params, null),


    /**
    * @tags Data
    * @name createGroupFeedData
    * @summary Create new Data in a feed belonging to a particular group
    * @request POST:/{username}/groups/{group_key}/feeds/{feed_key}/data
    */
    createGroupFeedData: (username: string, group_key: string, feed_key: string, datum: any, params?: RequestParams) =>
      this.request<DataResponse>(`/${username}/groups/${group_key}/feeds/${feed_key}/data`, "POST", params, datum),


    /**
    * @tags Data
    * @name batchCreateGroupFeedData
    * @summary Create multiple new Data records in a feed belonging to a particular group
    * @request POST:/{username}/groups/{group_key}/feeds/{feed_key}/data/batch
    */
    batchCreateGroupFeedData: (username: string, group_key: string, feed_key: string, data: any, params?: RequestParams) =>
      this.request<DataResponse[]>(`/${username}/groups/${group_key}/feeds/${feed_key}/data/batch`, "POST", params, data),


    /**
    * @tags Groups, Feeds
    * @name removeFeedFromGroup
    * @summary Remove a Feed from a Group
    * @request POST:/{username}/groups/{group_key}/remove
    */
    removeFeedFromGroup: (group_key: string, username: string, query: { feed_key?: string }, params?: RequestParams) =>
      this.request<Group>(`/${username}/groups/${group_key}/remove${this.addQueryParams(query)}`, "POST", params, null),


    /**
    * @tags Users
    * @name getCurrentUserThrottle
    * @summary Get the user's data rate limit and current activity level.
    * @request GET:/{username}/throttle
    */
    getCurrentUserThrottle: (username: string, params?: RequestParams) =>
      this.request<{ active_data_rate?: number, data_rate_limit?: number }>(`/${username}/throttle`, "GET", params, null),


    /**
    * @tags Tokens
    * @name allTokens
    * @summary All tokens for current user
    * @request GET:/{username}/tokens
    * @description The Tokens endpoint returns information about the user's tokens.. 
    */
    allTokens: (username: string, params?: RequestParams) =>
      this.request<Token[]>(`/${username}/tokens`, "GET", params, null),


    /**
    * @tags Tokens
    * @name createToken
    * @summary Create a new Token
    * @request POST:/{username}/tokens
    */
    createToken: (username: string, token: any, params?: RequestParams) =>
      this.request<Token>(`/${username}/tokens`, "POST", params, token),


    /**
    * @tags Tokens
    * @name destroyToken
    * @summary Delete an existing Token
    * @request DELETE:/{username}/tokens/{id}
    */
    destroyToken: (username: string, id: string, params?: RequestParams) =>
      this.request<string>(`/${username}/tokens/${id}`, "DELETE", params, null),


    /**
    * @tags Tokens
    * @name getToken
    * @summary Returns Token based on ID
    * @request GET:/{username}/tokens/{id}
    */
    getToken: (username: string, id: string, params?: RequestParams) =>
      this.request<Token>(`/${username}/tokens/${id}`, "GET", params, null),


    /**
    * @tags Tokens
    * @name updateToken
    * @summary Update properties of an existing Token
    * @request PATCH:/{username}/tokens/{id}
    */
    updateToken: (username: string, id: string, token: any, params?: RequestParams) =>
      this.request<Token>(`/${username}/tokens/${id}`, "PATCH", params, token),


    /**
    * @tags Tokens
    * @name replaceToken
    * @summary Replace an existing Token
    * @request PUT:/{username}/tokens/{id}
    */
    replaceToken: (username: string, id: string, token: any, params?: RequestParams) =>
      this.request<Token>(`/${username}/tokens/${id}`, "PUT", params, token),


    /**
    * @tags Triggers
    * @name allTriggers
    * @summary All triggers for current user
    * @request GET:/{username}/triggers
    * @description The Triggers endpoint returns information about the user's triggers.. 
    */
    allTriggers: (username: string, params?: RequestParams) =>
      this.request<Trigger[]>(`/${username}/triggers`, "GET", params, null),


    /**
    * @tags Triggers
    * @name createTrigger
    * @summary Create a new Trigger
    * @request POST:/{username}/triggers
    */
    createTrigger: (username: string, trigger: any, params?: RequestParams) =>
      this.request<Trigger>(`/${username}/triggers`, "POST", params, trigger),


    /**
    * @tags Triggers
    * @name destroyTrigger
    * @summary Delete an existing Trigger
    * @request DELETE:/{username}/triggers/{id}
    */
    destroyTrigger: (username: string, id: string, params?: RequestParams) =>
      this.request<string>(`/${username}/triggers/${id}`, "DELETE", params, null),


    /**
    * @tags Triggers
    * @name getTrigger
    * @summary Returns Trigger based on ID
    * @request GET:/{username}/triggers/{id}
    */
    getTrigger: (username: string, id: string, params?: RequestParams) =>
      this.request<Trigger>(`/${username}/triggers/${id}`, "GET", params, null),


    /**
    * @tags Triggers
    * @name updateTrigger
    * @summary Update properties of an existing Trigger
    * @request PATCH:/{username}/triggers/{id}
    */
    updateTrigger: (username: string, id: string, trigger: any, params?: RequestParams) =>
      this.request<Trigger>(`/${username}/triggers/${id}`, "PATCH", params, trigger),


    /**
    * @tags Triggers
    * @name replaceTrigger
    * @summary Replace an existing Trigger
    * @request PUT:/{username}/triggers/{id}
    */
    replaceTrigger: (username: string, id: string, trigger: any, params?: RequestParams) =>
      this.request<Trigger>(`/${username}/triggers/${id}`, "PUT", params, trigger),


    /**
    * @tags Permissions
    * @name allPermissions
    * @summary All permissions for current user and type
    * @request GET:/{username}/{type}/{type_id}/acl
    * @description The Permissions endpoint returns information about the user's permissions.. 
    */
    allPermissions: (username: string, type: string, type_id: string, params?: RequestParams) =>
      this.request<Permission[]>(`/${username}/${type}/${type_id}/acl`, "GET", params, null),


    /**
    * @tags Permissions
    * @name createPermission
    * @summary Create a new Permission
    * @request POST:/{username}/{type}/{type_id}/acl
    */
    createPermission: (username: string, type: string, type_id: string, permission: any, params?: RequestParams) =>
      this.request<Permission>(`/${username}/${type}/${type_id}/acl`, "POST", params, permission),


    /**
    * @tags Permissions
    * @name destroyPermission
    * @summary Delete an existing Permission
    * @request DELETE:/{username}/{type}/{type_id}/acl/{id}
    */
    destroyPermission: (username: string, type: string, type_id: string, id: string, params?: RequestParams) =>
      this.request<string>(`/${username}/${type}/${type_id}/acl/${id}`, "DELETE", params, null),


    /**
    * @tags Permissions
    * @name getPermission
    * @summary Returns Permission based on ID
    * @request GET:/{username}/{type}/{type_id}/acl/{id}
    */
    getPermission: (username: string, type: string, type_id: string, id: string, params?: RequestParams) =>
      this.request<Permission>(`/${username}/${type}/${type_id}/acl/${id}`, "GET", params, null),


    /**
    * @tags Permissions
    * @name updatePermission
    * @summary Update properties of an existing Permission
    * @request PATCH:/{username}/{type}/{type_id}/acl/{id}
    */
    updatePermission: (username: string, type: string, type_id: string, id: string, permission: any, params?: RequestParams) =>
      this.request<Permission>(`/${username}/${type}/${type_id}/acl/${id}`, "PATCH", params, permission),


    /**
    * @tags Permissions
    * @name replacePermission
    * @summary Replace an existing Permission
    * @request PUT:/{username}/{type}/{type_id}/acl/{id}
    */
    replacePermission: (username: string, type: string, type_id: string, id: string, permission: any, params?: RequestParams) =>
      this.request<Permission>(`/${username}/${type}/${type_id}/acl/${id}`, "PUT", params, permission),
  }

}
