export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
};

export type AuthResponse = {
  accessToken: Scalars["String"]["output"];
  refreshToken: Scalars["String"]["output"];
  user: User;
};

export type BooleanFieldComparison = {
  is?: InputMaybe<Scalars["Boolean"]["input"]>;
  isNot?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Business type */
export type BusinessType = "B2B" | "B2C" | "B2G";

export type CheckListItem = {
  checked: Scalars["Boolean"]["output"];
  title: Scalars["String"]["output"];
};

export type ChecklistItemInput = {
  checked: Scalars["Boolean"]["input"];
  title: Scalars["String"]["input"];
};

export type CreateEventCategorySubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: EventCategorySubscriptionFilter;
};

export type CreateEventSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: EventSubscriptionFilter;
};

export type CreateManyEventCategoriesInput = {
  /** Array of records to create */
  eventCategories: Array<EventCategoryCreateInput>;
};

export type CreateManyEventsInput = {
  /** Array of records to create */
  events: Array<EventCreateInput>;
};

export type CreateManyQuotesInput = {
  /** Array of records to create */
  quotes: Array<QuoteCreateInput>;
};

export type CreateManyTaskCommentsInput = {
  /** Array of records to create */
  taskComments: Array<TaskCommentCreateInput>;
};

export type CreateManyTaskStagesInput = {
  /** Array of records to create */
  taskStages: Array<TaskStageCreateInput>;
};

export type CreateManyTasksInput = {
  /** Array of records to create */
  tasks: Array<TaskCreateInput>;
};

export type CreateManyUsersInput = {
  /** Array of records to create */
  users: Array<UserCreateInput>;
};

export type CreateOneEventCategoryInput = {
  /** The record to create */
  eventCategory: EventCategoryCreateInput;
};

export type CreateOneEventInput = {
  /** The record to create */
  event: EventCreateInput;
};

export type CreateOneQuoteInput = {
  /** The record to create */
  quote: QuoteCreateInput;
};

export type CreateOneTaskCommentInput = {
  /** The record to create */
  taskComment: TaskCommentCreateInput;
};

export type CreateOneTaskInput = {
  /** The record to create */
  task: TaskCreateInput;
};

export type CreateOneTaskStageInput = {
  /** The record to create */
  taskStage: TaskStageCreateInput;
};

export type CreateOneUserInput = {
  /** The record to create */
  user: UserCreateInput;
};

export type CreateQuoteSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: QuoteSubscriptionFilter;
};

export type CreateTaskCommentSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: TaskCommentSubscriptionFilter;
};

export type CreateTaskStageSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: TaskStageSubscriptionFilter;
};

export type CreateTaskSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: TaskSubscriptionFilter;
};

export type CreateUserSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: UserSubscriptionFilter;
};

export type DeleteManyEventCategoriesInput = {
  /** Filter to find records to delete */
  filter: EventCategoryDeleteFilter;
};

export type DeleteManyEventsInput = {
  /** Filter to find records to delete */
  filter: EventDeleteFilter;
};

export type DeleteManyQuotesInput = {
  /** Filter to find records to delete */
  filter: QuoteDeleteFilter;
};

export type DeleteManyResponse = {
  /** The number of records deleted. */
  deletedCount: Scalars["Int"]["output"];
};

export type DeleteManyTaskCommentsInput = {
  /** Filter to find records to delete */
  filter: TaskCommentDeleteFilter;
};

export type DeleteManyTaskStagesInput = {
  /** Filter to find records to delete */
  filter: TaskStageDeleteFilter;
};

export type DeleteManyTasksInput = {
  /** Filter to find records to delete */
  filter: TaskDeleteFilter;
};

export type DeleteManyUsersInput = {
  /** Filter to find records to delete */
  filter: UserDeleteFilter;
};

export type DeleteOneContactInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"]["input"];
};

export type DeleteOneContactNoteInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"]["input"];
};

export type DeleteOneDealInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"]["input"];
};

export type DeleteOneDealStageInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"]["input"];
};

export type DeleteOneEventCategoryInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"]["input"];
};

export type DeleteOneEventCategorySubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: EventCategorySubscriptionFilter;
};

export type DeleteOneEventInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"]["input"];
};

export type DeleteOneEventSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: EventSubscriptionFilter;
};

export type DeleteOneQuoteInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"]["input"];
};

export type DeleteOneQuoteSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: QuoteSubscriptionFilter;
};

export type DeleteOneTaskCommentInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"]["input"];
};

export type DeleteOneTaskCommentSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: TaskCommentSubscriptionFilter;
};

export type DeleteOneTaskInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"]["input"];
};

export type DeleteOneTaskStageInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"]["input"];
};

export type DeleteOneTaskStageSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: TaskStageSubscriptionFilter;
};

export type DeleteOneTaskSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: TaskSubscriptionFilter;
};

export type DeleteOneUserInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"]["input"];
};

export type DeleteOneUserSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: UserSubscriptionFilter;
};

export type Event = {
  category: EventCategory;
  color: Scalars["String"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  createdBy: User;
  description: Scalars["String"]["output"];
  endDate: Scalars["DateTime"]["output"];
  id: Scalars["ID"]["output"];
  participants: Array<User>;
  startDate: Scalars["DateTime"]["output"];
  title: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  updatedBy?: Maybe<User>;
};

export type EventParticipantsArgs = {
  filter?: UserFilter;
  sorting?: Array<UserSort>;
};

export type EventCategory = {
  createdAt: Scalars["DateTime"]["output"];
  createdBy: User;
  events: Array<EventCategory>;
  id: Scalars["ID"]["output"];
  title: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  updatedBy?: Maybe<User>;
};

export type EventCategoryEventsArgs = {
  filter?: EventCategoryFilter;
  sorting?: Array<EventCategorySort>;
};

export type EventCategoryConnection = {
  /** Array of nodes. */
  nodes: Array<EventCategory>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"]["output"];
};

export type EventCategoryCreateInput = {
  title: Scalars["String"]["input"];
};

export type EventCategoryDeleteFilter = {
  and?: InputMaybe<Array<EventCategoryDeleteFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<EventCategoryDeleteFilter>>;
  title?: InputMaybe<StringFieldComparison>;
};

export type EventCategoryDeleteResponse = {
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type EventCategoryFilter = {
  and?: InputMaybe<Array<EventCategoryFilter>>;
  createdBy?: InputMaybe<EventCategoryFilterUserFilter>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<EventCategoryFilter>>;
  title?: InputMaybe<StringFieldComparison>;
  updatedBy?: InputMaybe<EventCategoryFilterUserFilter>;
};

export type EventCategoryFilterUserFilter = {
  and?: InputMaybe<Array<EventCategoryFilterUserFilter>>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  jobTitle?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<EventCategoryFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  role?: InputMaybe<UserRoleFilterComparison>;
  timezone?: InputMaybe<StringFieldComparison>;
};

export type EventCategorySort = {
  direction: SortDirection;
  field: EventCategorySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export type EventCategorySortFields =
  | "createdAt"
  | "id"
  | "title"
  | "updatedAt";

export type EventCategorySubscriptionFilter = {
  and?: InputMaybe<Array<EventCategorySubscriptionFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<EventCategorySubscriptionFilter>>;
  title?: InputMaybe<StringFieldComparison>;
};

export type EventCategoryUpdateFilter = {
  and?: InputMaybe<Array<EventCategoryUpdateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<EventCategoryUpdateFilter>>;
  title?: InputMaybe<StringFieldComparison>;
};

export type EventCategoryUpdateInput = {
  title: Scalars["String"]["input"];
};

export type EventConnection = {
  /** Array of nodes. */
  nodes: Array<Event>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"]["output"];
};

export type EventCreateInput = {
  categoryId: Scalars["ID"]["input"];
  color: Scalars["String"]["input"];
  description: Scalars["String"]["input"];
  endDate: Scalars["DateTime"]["input"];
  participantIds: Array<Scalars["ID"]["input"]>;
  startDate: Scalars["DateTime"]["input"];
  title: Scalars["String"]["input"];
};

export type EventDeleteFilter = {
  and?: InputMaybe<Array<EventDeleteFilter>>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<EventDeleteFilter>>;
  title?: InputMaybe<StringFieldComparison>;
};

export type EventDeleteResponse = {
  color?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  endDate?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  startDate?: Maybe<Scalars["DateTime"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type EventFilter = {
  and?: InputMaybe<Array<EventFilter>>;
  category?: InputMaybe<EventFilterEventCategoryFilter>;
  createdBy?: InputMaybe<EventFilterUserFilter>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<EventFilter>>;
  title?: InputMaybe<StringFieldComparison>;
  updatedBy?: InputMaybe<EventFilterUserFilter>;
};

export type EventFilterEventCategoryFilter = {
  and?: InputMaybe<Array<EventFilterEventCategoryFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<EventFilterEventCategoryFilter>>;
  title?: InputMaybe<StringFieldComparison>;
};

export type EventFilterUserFilter = {
  and?: InputMaybe<Array<EventFilterUserFilter>>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  jobTitle?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<EventFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  role?: InputMaybe<UserRoleFilterComparison>;
  timezone?: InputMaybe<StringFieldComparison>;
};

export type EventSort = {
  direction: SortDirection;
  field: EventSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export type EventSortFields =
  | "createdAt"
  | "description"
  | "endDate"
  | "id"
  | "startDate"
  | "title"
  | "updatedAt";

export type EventSubscriptionFilter = {
  and?: InputMaybe<Array<EventSubscriptionFilter>>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<EventSubscriptionFilter>>;
  title?: InputMaybe<StringFieldComparison>;
};

export type EventUpdateFilter = {
  and?: InputMaybe<Array<EventUpdateFilter>>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<EventUpdateFilter>>;
  title?: InputMaybe<StringFieldComparison>;
};

export type EventUpdateInput = {
  categoryId?: InputMaybe<Scalars["ID"]["input"]>;
  color?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  endDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  participantIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  startDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type FloatFieldComparison = {
  between?: InputMaybe<FloatFieldComparisonBetween>;
  eq?: InputMaybe<Scalars["Float"]["input"]>;
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  gte?: InputMaybe<Scalars["Float"]["input"]>;
  in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  is?: InputMaybe<Scalars["Boolean"]["input"]>;
  isNot?: InputMaybe<Scalars["Boolean"]["input"]>;
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  lte?: InputMaybe<Scalars["Float"]["input"]>;
  neq?: InputMaybe<Scalars["Float"]["input"]>;
  notBetween?: InputMaybe<FloatFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

export type FloatFieldComparisonBetween = {
  lower: Scalars["Float"]["input"];
  upper: Scalars["Float"]["input"];
};

/** Group by */
export type GroupBy = "DAY" | "MONTH" | "WEEK" | "YEAR";

export type IdFilterComparison = {
  eq?: InputMaybe<Scalars["ID"]["input"]>;
  gt?: InputMaybe<Scalars["ID"]["input"]>;
  gte?: InputMaybe<Scalars["ID"]["input"]>;
  iLike?: InputMaybe<Scalars["ID"]["input"]>;
  in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  is?: InputMaybe<Scalars["Boolean"]["input"]>;
  isNot?: InputMaybe<Scalars["Boolean"]["input"]>;
  like?: InputMaybe<Scalars["ID"]["input"]>;
  lt?: InputMaybe<Scalars["ID"]["input"]>;
  lte?: InputMaybe<Scalars["ID"]["input"]>;
  neq?: InputMaybe<Scalars["ID"]["input"]>;
  notILike?: InputMaybe<Scalars["ID"]["input"]>;
  notIn?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  notLike?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Industry */
export type Industry =
  | "AEROSPACE"
  | "AGRICULTURE"
  | "AUTOMOTIVE"
  | "CHEMICALS"
  | "CONSTRUCTION"
  | "DEFENSE"
  | "EDUCATION"
  | "ENERGY"
  | "FINANCIAL_SERVICES"
  | "FOOD_AND_BEVERAGE"
  | "GOVERNMENT"
  | "HEALTHCARE"
  | "HOSPITALITY"
  | "INDUSTRIAL_MANUFACTURING"
  | "INSURANCE"
  | "LIFE_SCIENCES"
  | "LOGISTICS"
  | "MEDIA"
  | "MINING"
  | "NONPROFIT"
  | "OTHER"
  | "PHARMACEUTICALS"
  | "PROFESSIONAL_SERVICES"
  | "REAL_ESTATE"
  | "RETAIL"
  | "TECHNOLOGY"
  | "TELECOMMUNICATIONS"
  | "TRANSPORTATION"
  | "UTILITIES";

export type IntFieldComparison = {
  between?: InputMaybe<IntFieldComparisonBetween>;
  eq?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  is?: InputMaybe<Scalars["Boolean"]["input"]>;
  isNot?: InputMaybe<Scalars["Boolean"]["input"]>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  neq?: InputMaybe<Scalars["Int"]["input"]>;
  notBetween?: InputMaybe<IntFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type IntFieldComparisonBetween = {
  lower: Scalars["Int"]["input"];
  upper: Scalars["Int"]["input"];
};

export type LoginInput = {
  email: Scalars["String"]["input"];
};

export type Mutation = {
  createManyEventCategories: Array<EventCategory>;
  createManyEvents: Array<Event>;
  createManyQuotes: Array<Quote>;
  createManyTaskComments: Array<TaskComment>;
  createManyTaskStages: Array<TaskStage>;
  createManyTasks: Array<Task>;
  createManyUsers: Array<User>;
  createOneEvent: Event;
  createOneEventCategory: EventCategory;
  createOneQuote: Quote;
  createOneTask: Task;
  createOneTaskComment: TaskComment;
  createOneTaskStage: TaskStage;
  createOneUser: User;
  deleteManyEventCategories: DeleteManyResponse;
  deleteManyEvents: DeleteManyResponse;
  deleteManyQuotes: DeleteManyResponse;
  deleteManyTaskComments: DeleteManyResponse;
  deleteManyTaskStages: DeleteManyResponse;
  deleteManyTasks: DeleteManyResponse;
  deleteManyUsers: DeleteManyResponse;
  deleteOneEvent: EventDeleteResponse;
  deleteOneEventCategory: EventCategoryDeleteResponse;
  deleteOneQuote: QuoteDeleteResponse;
  deleteOneTask: TaskDeleteResponse;
  deleteOneTaskComment: TaskCommentDeleteResponse;
  deleteOneTaskStage: TaskStageDeleteResponse;
  deleteOneUser: UserDeleteResponse;
  login: AuthResponse;
  refreshToken: AuthResponse;
  register: User;
  updateManyEventCategories: UpdateManyResponse;
  updateManyEvents: UpdateManyResponse;
  updateManyQuotes: UpdateManyResponse;
  updateManyTaskComments: UpdateManyResponse;
  updateManyTaskStages: UpdateManyResponse;
  updateManyTasks: UpdateManyResponse;
  updateManyUsers: UpdateManyResponse;
  updateOneEvent: Event;
  updateOneEventCategory: EventCategory;
  updateOneQuote: Quote;
  updateOneTask: Task;
  updateOneTaskComment: TaskComment;
  updateOneTaskStage: TaskStage;
  updateOneUser: User;
};

export type MutationCreateManyEventCategoriesArgs = {
  input: CreateManyEventCategoriesInput;
};

export type MutationCreateManyEventsArgs = {
  input: CreateManyEventsInput;
};

export type MutationCreateManyQuotesArgs = {
  input: CreateManyQuotesInput;
};

export type MutationCreateManyTaskCommentsArgs = {
  input: CreateManyTaskCommentsInput;
};

export type MutationCreateManyTaskStagesArgs = {
  input: CreateManyTaskStagesInput;
};

export type MutationCreateManyTasksArgs = {
  input: CreateManyTasksInput;
};

export type MutationCreateManyUsersArgs = {
  input: CreateManyUsersInput;
};

export type MutationCreateOneEventArgs = {
  input: CreateOneEventInput;
};

export type MutationCreateOneEventCategoryArgs = {
  input: CreateOneEventCategoryInput;
};

export type MutationCreateOneQuoteArgs = {
  input: CreateOneQuoteInput;
};

export type MutationCreateOneTaskArgs = {
  input: CreateOneTaskInput;
};

export type MutationCreateOneTaskCommentArgs = {
  input: CreateOneTaskCommentInput;
};

export type MutationCreateOneTaskStageArgs = {
  input: CreateOneTaskStageInput;
};

export type MutationCreateOneUserArgs = {
  input: CreateOneUserInput;
};

export type MutationDeleteManyEventCategoriesArgs = {
  input: DeleteManyEventCategoriesInput;
};

export type MutationDeleteManyEventsArgs = {
  input: DeleteManyEventsInput;
};

export type MutationDeleteManyQuotesArgs = {
  input: DeleteManyQuotesInput;
};

export type MutationDeleteManyTaskCommentsArgs = {
  input: DeleteManyTaskCommentsInput;
};

export type MutationDeleteManyTaskStagesArgs = {
  input: DeleteManyTaskStagesInput;
};

export type MutationDeleteManyTasksArgs = {
  input: DeleteManyTasksInput;
};

export type MutationDeleteManyUsersArgs = {
  input: DeleteManyUsersInput;
};

export type MutationDeleteOneContactArgs = {
  input: DeleteOneContactInput;
};

export type MutationDeleteOneContactNoteArgs = {
  input: DeleteOneContactNoteInput;
};

export type MutationDeleteOneDealArgs = {
  input: DeleteOneDealInput;
};

export type MutationDeleteOneDealStageArgs = {
  input: DeleteOneDealStageInput;
};

export type MutationDeleteOneEventArgs = {
  input: DeleteOneEventInput;
};

export type MutationDeleteOneEventCategoryArgs = {
  input: DeleteOneEventCategoryInput;
};

export type MutationDeleteOneQuoteArgs = {
  input: DeleteOneQuoteInput;
};

export type MutationDeleteOneTaskArgs = {
  input: DeleteOneTaskInput;
};

export type MutationDeleteOneTaskCommentArgs = {
  input: DeleteOneTaskCommentInput;
};

export type MutationDeleteOneTaskStageArgs = {
  input: DeleteOneTaskStageInput;
};

export type MutationDeleteOneUserArgs = {
  input: DeleteOneUserInput;
};

export type MutationLoginArgs = {
  loginInput: LoginInput;
};

export type MutationRefreshTokenArgs = {
  refreshToken: Scalars["String"]["input"];
};

export type MutationRegisterArgs = {
  registerInput: RegisterInput;
};

export type MutationUpdateManyEventCategoriesArgs = {
  input: UpdateManyEventCategoriesInput;
};

export type MutationUpdateManyEventsArgs = {
  input: UpdateManyEventsInput;
};

export type MutationUpdateManyQuotesArgs = {
  input: UpdateManyQuotesInput;
};

export type MutationUpdateManyTaskCommentsArgs = {
  input: UpdateManyTaskCommentsInput;
};

export type MutationUpdateManyTaskStagesArgs = {
  input: UpdateManyTaskStagesInput;
};

export type MutationUpdateManyTasksArgs = {
  input: UpdateManyTasksInput;
};

export type MutationUpdateManyUsersArgs = {
  input: UpdateManyUsersInput;
};

export type MutationUpdateOneEventArgs = {
  input: UpdateOneEventInput;
};

export type MutationUpdateOneEventCategoryArgs = {
  input: UpdateOneEventCategoryInput;
};

export type MutationUpdateOneQuoteArgs = {
  input: UpdateOneQuoteInput;
};

export type MutationUpdateOneTaskArgs = {
  input: UpdateOneTaskInput;
};

export type MutationUpdateOneTaskCommentArgs = {
  input: UpdateOneTaskCommentInput;
};

export type MutationUpdateOneTaskStageArgs = {
  input: UpdateOneTaskStageInput;
};

export type MutationUpdateOneUserArgs = {
  input: UpdateOneUserInput;
};

export type NumberFieldComparison = {
  between?: InputMaybe<NumberFieldComparisonBetween>;
  eq?: InputMaybe<Scalars["Float"]["input"]>;
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  gte?: InputMaybe<Scalars["Float"]["input"]>;
  in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  is?: InputMaybe<Scalars["Boolean"]["input"]>;
  isNot?: InputMaybe<Scalars["Boolean"]["input"]>;
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  lte?: InputMaybe<Scalars["Float"]["input"]>;
  neq?: InputMaybe<Scalars["Float"]["input"]>;
  notBetween?: InputMaybe<NumberFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

export type NumberFieldComparisonBetween = {
  lower: Scalars["Float"]["input"];
  upper: Scalars["Float"]["input"];
};

export type OffsetPageInfo = {
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars["Boolean"]["output"]>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars["Boolean"]["output"]>;
};

export type OffsetPaging = {
  /** Limit the number of records returned */
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  /** Offset to start returning records from */
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Query = {
  eventCategories: EventCategoryConnection;
  eventCategory: EventCategory;
  events: EventConnection;
  me: User;
  quote: Quote;
  quotes: QuoteConnection;
  task: Task;
  taskAggregate: Array<TaskAggregateResponse>;
  taskComment: TaskComment;
  taskComments: TaskCommentConnection;
  taskStage: TaskStage;
  taskStageAggregate: Array<TaskStageAggregateResponse>;
  taskStages: TaskStageConnection;
  tasks: TaskConnection;
  user: User;
  users: UserConnection;
};

export type QueryContactArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryContactNoteArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryDealArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryDealStageArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryEventArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryEventCategoriesArgs = {
  filter?: EventCategoryFilter;
  paging?: OffsetPaging;
  sorting?: Array<EventCategorySort>;
};

export type QueryEventCategoryArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryEventsArgs = {
  filter?: EventFilter;
  paging?: OffsetPaging;
  sorting?: Array<EventSort>;
};

export type QueryQuoteArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryQuotesArgs = {
  filter?: QuoteFilter;
  paging?: OffsetPaging;
  sorting?: Array<QuoteSort>;
};

export type QueryTaskArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryTaskAggregateArgs = {
  filter?: InputMaybe<TaskAggregateFilter>;
};

export type QueryTaskCommentArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryTaskCommentsArgs = {
  filter?: TaskCommentFilter;
  paging?: OffsetPaging;
  sorting?: Array<TaskCommentSort>;
};

export type QueryTaskStageArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryTaskStageAggregateArgs = {
  filter?: InputMaybe<TaskStageAggregateFilter>;
};

export type QueryTaskStagesArgs = {
  filter?: TaskStageFilter;
  paging?: OffsetPaging;
  sorting?: Array<TaskStageSort>;
};

export type QueryTasksArgs = {
  filter?: TaskFilter;
  paging?: OffsetPaging;
  sorting?: Array<TaskSort>;
};

export type QueryUserArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryUsersArgs = {
  filter?: UserFilter;
  paging?: OffsetPaging;
  sorting?: Array<UserSort>;
};

export type Quote = {
  createdAt: Scalars["DateTime"]["output"];
  createdBy: User;
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  items: Array<QuoteItem>;
  salesOwner: User;
  status: QuoteStatus;
  subTotal: Scalars["Float"]["output"];
  tax: Scalars["Int"]["output"];
  title: Scalars["String"]["output"];
  total: Scalars["Float"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  updatedBy?: Maybe<User>;
};

export type QuoteConnection = {
  /** Array of nodes. */
  nodes: Array<Quote>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"]["output"];
};

export type QuoteCreateInput = {
  contactId: Scalars["ID"]["input"];
  salesOwnerId: Scalars["ID"]["input"];
  title: Scalars["String"]["input"];
};

export type QuoteDeleteFilter = {
  and?: InputMaybe<Array<QuoteDeleteFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<QuoteDeleteFilter>>;
  status?: InputMaybe<QuoteStatusFilterComparison>;
  title?: InputMaybe<StringFieldComparison>;
  total?: InputMaybe<FloatFieldComparison>;
};

export type QuoteDeleteResponse = {
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  items?: Maybe<Array<QuoteItem>>;
  status?: Maybe<QuoteStatus>;
  subTotal?: Maybe<Scalars["Float"]["output"]>;
  tax?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  total?: Maybe<Scalars["Float"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type QuoteFilter = {
  and?: InputMaybe<Array<QuoteFilter>>;
  createdBy?: InputMaybe<QuoteFilterUserFilter>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<QuoteFilter>>;
  salesOwner?: InputMaybe<QuoteFilterUserFilter>;
  status?: InputMaybe<QuoteStatusFilterComparison>;
  title?: InputMaybe<StringFieldComparison>;
  total?: InputMaybe<FloatFieldComparison>;
  updatedBy?: InputMaybe<QuoteFilterUserFilter>;
};

export type QuoteFilterContactFilter = {
  and?: InputMaybe<Array<QuoteFilterContactFilter>>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  jobTitle?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<QuoteFilterContactFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  score?: InputMaybe<IntFieldComparison>;
  timezone?: InputMaybe<StringFieldComparison>;
};

export type QuoteFilterUserFilter = {
  and?: InputMaybe<Array<QuoteFilterUserFilter>>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  jobTitle?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<QuoteFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  role?: InputMaybe<UserRoleFilterComparison>;
  timezone?: InputMaybe<StringFieldComparison>;
};

export type QuoteItem = {
  discount: Scalars["Int"]["output"];
  quantity: Scalars["Int"]["output"];
  title: Scalars["String"]["output"];
  totalPrice: Scalars["Float"]["output"];
  unitPrice: Scalars["Float"]["output"];
};

export type QuoteItemInput = {
  discount: Scalars["Int"]["input"];
  quantity: Scalars["Int"]["input"];
  title: Scalars["String"]["input"];
  unitPrice: Scalars["Float"]["input"];
};

export type QuoteSort = {
  direction: SortDirection;
  field: QuoteSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export type QuoteSortFields =
  | "createdAt"
  | "id"
  | "status"
  | "title"
  | "total"
  | "updatedAt";

/** Quote status */
export type QuoteStatus = "ACCEPTED" | "DRAFT" | "SENT";

export type QuoteStatusFilterComparison = {
  eq?: InputMaybe<QuoteStatus>;
  gt?: InputMaybe<QuoteStatus>;
  gte?: InputMaybe<QuoteStatus>;
  iLike?: InputMaybe<QuoteStatus>;
  in?: InputMaybe<Array<QuoteStatus>>;
  is?: InputMaybe<Scalars["Boolean"]["input"]>;
  isNot?: InputMaybe<Scalars["Boolean"]["input"]>;
  like?: InputMaybe<QuoteStatus>;
  lt?: InputMaybe<QuoteStatus>;
  lte?: InputMaybe<QuoteStatus>;
  neq?: InputMaybe<QuoteStatus>;
  notILike?: InputMaybe<QuoteStatus>;
  notIn?: InputMaybe<Array<QuoteStatus>>;
  notLike?: InputMaybe<QuoteStatus>;
};

export type QuoteSubscriptionFilter = {
  and?: InputMaybe<Array<QuoteSubscriptionFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<QuoteSubscriptionFilter>>;
  status?: InputMaybe<QuoteStatusFilterComparison>;
  title?: InputMaybe<StringFieldComparison>;
  total?: InputMaybe<FloatFieldComparison>;
};

export type QuoteUpdateFilter = {
  and?: InputMaybe<Array<QuoteUpdateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<QuoteUpdateFilter>>;
  status?: InputMaybe<QuoteStatusFilterComparison>;
  title?: InputMaybe<StringFieldComparison>;
  total?: InputMaybe<FloatFieldComparison>;
};

export type QuoteUpdateInput = {
  contactId?: InputMaybe<Scalars["ID"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  items?: InputMaybe<Array<QuoteItemInput>>;
  salesOwnerId?: InputMaybe<Scalars["ID"]["input"]>;
  status?: InputMaybe<QuoteStatus>;
  tax?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type RegisterInput = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

/** Role */
export type Role = "ADMIN" | "SALES_INTERN" | "SALES_MANAGER" | "SALES_PERSON";

/** Sort Directions */
export type SortDirection = "ASC" | "DESC";

/** Sort Nulls Options */
export type SortNulls = "NULLS_FIRST" | "NULLS_LAST";

export type StringFieldComparison = {
  eq?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  iLike?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  is?: InputMaybe<Scalars["Boolean"]["input"]>;
  isNot?: InputMaybe<Scalars["Boolean"]["input"]>;
  like?: InputMaybe<Scalars["String"]["input"]>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  neq?: InputMaybe<Scalars["String"]["input"]>;
  notILike?: InputMaybe<Scalars["String"]["input"]>;
  notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  notLike?: InputMaybe<Scalars["String"]["input"]>;
};

export type Subscription = {
  createdEvent: Event;
  createdEventCategory: EventCategory;
  createdQuote: Quote;
  createdTask: Task;
  createdTaskComment: TaskComment;
  createdTaskStage: TaskStage;
  createdUser: User;
  deletedManyAudits: DeleteManyResponse;
  deletedManyContactNotes: DeleteManyResponse;
  deletedManyContacts: DeleteManyResponse;
  deletedManyDealStages: DeleteManyResponse;
  deletedManyDeals: DeleteManyResponse;
  deletedManyEventCategories: DeleteManyResponse;
  deletedManyEvents: DeleteManyResponse;
  deletedManyQuotes: DeleteManyResponse;
  deletedManyTaskComments: DeleteManyResponse;
  deletedManyTaskStages: DeleteManyResponse;
  deletedManyTasks: DeleteManyResponse;
  deletedManyUsers: DeleteManyResponse;
  deletedOneEvent: EventDeleteResponse;
  deletedOneEventCategory: EventCategoryDeleteResponse;
  deletedOneQuote: QuoteDeleteResponse;
  deletedOneTask: TaskDeleteResponse;
  deletedOneTaskComment: TaskCommentDeleteResponse;
  deletedOneTaskStage: TaskStageDeleteResponse;
  deletedOneUser: UserDeleteResponse;
  updatedManyAudits: UpdateManyResponse;
  updatedManyContactNotes: UpdateManyResponse;
  updatedManyContacts: UpdateManyResponse;
  updatedManyDealStages: UpdateManyResponse;
  updatedManyDeals: UpdateManyResponse;
  updatedManyEventCategories: UpdateManyResponse;
  updatedManyEvents: UpdateManyResponse;
  updatedManyQuotes: UpdateManyResponse;
  updatedManyTaskComments: UpdateManyResponse;
  updatedManyTaskStages: UpdateManyResponse;
  updatedManyTasks: UpdateManyResponse;
  updatedManyUsers: UpdateManyResponse;
  updatedOneEvent: Event;
  updatedOneEventCategory: EventCategory;
  updatedOneQuote: Quote;
  updatedOneTask: Task;
  updatedOneTaskComment: TaskComment;
  updatedOneTaskStage: TaskStage;
  updatedOneUser: User;
};

export type SubscriptionCreatedEventArgs = {
  input?: InputMaybe<CreateEventSubscriptionFilterInput>;
};

export type SubscriptionCreatedEventCategoryArgs = {
  input?: InputMaybe<CreateEventCategorySubscriptionFilterInput>;
};

export type SubscriptionCreatedQuoteArgs = {
  input?: InputMaybe<CreateQuoteSubscriptionFilterInput>;
};

export type SubscriptionCreatedTaskArgs = {
  input?: InputMaybe<CreateTaskSubscriptionFilterInput>;
};

export type SubscriptionCreatedTaskCommentArgs = {
  input?: InputMaybe<CreateTaskCommentSubscriptionFilterInput>;
};

export type SubscriptionCreatedTaskStageArgs = {
  input?: InputMaybe<CreateTaskStageSubscriptionFilterInput>;
};

export type SubscriptionCreatedUserArgs = {
  input?: InputMaybe<CreateUserSubscriptionFilterInput>;
};

export type SubscriptionDeletedOneEventArgs = {
  input?: InputMaybe<DeleteOneEventSubscriptionFilterInput>;
};

export type SubscriptionDeletedOneEventCategoryArgs = {
  input?: InputMaybe<DeleteOneEventCategorySubscriptionFilterInput>;
};

export type SubscriptionDeletedOneQuoteArgs = {
  input?: InputMaybe<DeleteOneQuoteSubscriptionFilterInput>;
};

export type SubscriptionDeletedOneTaskArgs = {
  input?: InputMaybe<DeleteOneTaskSubscriptionFilterInput>;
};

export type SubscriptionDeletedOneTaskCommentArgs = {
  input?: InputMaybe<DeleteOneTaskCommentSubscriptionFilterInput>;
};

export type SubscriptionDeletedOneTaskStageArgs = {
  input?: InputMaybe<DeleteOneTaskStageSubscriptionFilterInput>;
};

export type SubscriptionDeletedOneUserArgs = {
  input?: InputMaybe<DeleteOneUserSubscriptionFilterInput>;
};

export type SubscriptionUpdatedOneEventArgs = {
  input?: InputMaybe<UpdateOneEventSubscriptionFilterInput>;
};

export type SubscriptionUpdatedOneEventCategoryArgs = {
  input?: InputMaybe<UpdateOneEventCategorySubscriptionFilterInput>;
};

export type SubscriptionUpdatedOneQuoteArgs = {
  input?: InputMaybe<UpdateOneQuoteSubscriptionFilterInput>;
};

export type SubscriptionUpdatedOneTaskArgs = {
  input?: InputMaybe<UpdateOneTaskSubscriptionFilterInput>;
};

export type SubscriptionUpdatedOneTaskCommentArgs = {
  input?: InputMaybe<UpdateOneTaskCommentSubscriptionFilterInput>;
};

export type SubscriptionUpdatedOneTaskStageArgs = {
  input?: InputMaybe<UpdateOneTaskStageSubscriptionFilterInput>;
};

export type SubscriptionUpdatedOneUserArgs = {
  input?: InputMaybe<UpdateOneUserSubscriptionFilterInput>;
};

export type Task = {
  checklist: Array<CheckListItem>;
  comments: TaskCommentsConnection;
  commentsAggregate: Array<TaskCommentsAggregateResponse>;
  completed: Scalars["Boolean"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  createdBy: User;
  description?: Maybe<Scalars["String"]["output"]>;
  dueDate?: Maybe<Scalars["DateTime"]["output"]>;
  id: Scalars["ID"]["output"];
  stage?: Maybe<TaskStage>;
  stageId?: Maybe<Scalars["ID"]["output"]>;
  title: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  updatedBy?: Maybe<User>;
  users: Array<User>;
  usersAggregate: Array<TaskUsersAggregateResponse>;
};

export type TaskCommentsArgs = {
  filter?: TaskCommentFilter;
  paging?: OffsetPaging;
  sorting?: Array<TaskCommentSort>;
};

export type TaskCommentsAggregateArgs = {
  filter?: InputMaybe<TaskCommentAggregateFilter>;
};

export type TaskUsersArgs = {
  filter?: UserFilter;
  sorting?: Array<UserSort>;
};

export type TaskUsersAggregateArgs = {
  filter?: InputMaybe<UserAggregateFilter>;
};

export type TaskAggregateFilter = {
  and?: InputMaybe<Array<TaskAggregateFilter>>;
  completed?: InputMaybe<BooleanFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TaskAggregateFilter>>;
  stageId?: InputMaybe<IdFilterComparison>;
  title?: InputMaybe<StringFieldComparison>;
};

export type TaskAggregateGroupBy = {
  completed?: Maybe<Scalars["Boolean"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  dueDate?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  stageId?: Maybe<Scalars["ID"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type TaskAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};

export type TaskAggregateGroupByDueDateArgs = {
  by?: GroupBy;
};

export type TaskAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type TaskAggregateResponse = {
  avg?: Maybe<TaskAvgAggregate>;
  count?: Maybe<TaskCountAggregate>;
  groupBy?: Maybe<TaskAggregateGroupBy>;
  max?: Maybe<TaskMaxAggregate>;
  min?: Maybe<TaskMinAggregate>;
  sum?: Maybe<TaskSumAggregate>;
};

export type TaskAvgAggregate = {
  id?: Maybe<Scalars["Float"]["output"]>;
  stageId?: Maybe<Scalars["Float"]["output"]>;
};

export type TaskComment = {
  comment: Scalars["String"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  createdBy: User;
  id: Scalars["ID"]["output"];
  task: Task;
  updatedAt: Scalars["DateTime"]["output"];
  updatedBy?: Maybe<User>;
};

export type TaskCommentAggregateFilter = {
  and?: InputMaybe<Array<TaskCommentAggregateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TaskCommentAggregateFilter>>;
};

export type TaskCommentConnection = {
  /** Array of nodes. */
  nodes: Array<TaskComment>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"]["output"];
};

export type TaskCommentCreateInput = {
  comment: Scalars["String"]["input"];
  taskId: Scalars["ID"]["input"];
};

export type TaskCommentDeleteFilter = {
  and?: InputMaybe<Array<TaskCommentDeleteFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TaskCommentDeleteFilter>>;
};

export type TaskCommentDeleteResponse = {
  comment?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type TaskCommentFilter = {
  and?: InputMaybe<Array<TaskCommentFilter>>;
  createdBy?: InputMaybe<TaskCommentFilterUserFilter>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TaskCommentFilter>>;
  task?: InputMaybe<TaskCommentFilterTaskFilter>;
  updatedBy?: InputMaybe<TaskCommentFilterUserFilter>;
};

export type TaskCommentFilterTaskFilter = {
  and?: InputMaybe<Array<TaskCommentFilterTaskFilter>>;
  completed?: InputMaybe<BooleanFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TaskCommentFilterTaskFilter>>;
  stageId?: InputMaybe<IdFilterComparison>;
  title?: InputMaybe<StringFieldComparison>;
};

export type TaskCommentFilterUserFilter = {
  and?: InputMaybe<Array<TaskCommentFilterUserFilter>>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  jobTitle?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TaskCommentFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  role?: InputMaybe<UserRoleFilterComparison>;
  timezone?: InputMaybe<StringFieldComparison>;
};

export type TaskCommentSort = {
  direction: SortDirection;
  field: TaskCommentSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export type TaskCommentSortFields = "createdAt" | "id" | "updatedAt";

export type TaskCommentSubscriptionFilter = {
  and?: InputMaybe<Array<TaskCommentSubscriptionFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TaskCommentSubscriptionFilter>>;
};

export type TaskCommentUpdateFilter = {
  and?: InputMaybe<Array<TaskCommentUpdateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TaskCommentUpdateFilter>>;
};

export type TaskCommentUpdateInput = {
  comment: Scalars["String"]["input"];
};

export type TaskCommentsAggregateGroupBy = {
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type TaskCommentsAggregateResponse = {
  avg?: Maybe<TaskCommentsAvgAggregate>;
  count?: Maybe<TaskCommentsCountAggregate>;
  groupBy?: Maybe<TaskCommentsAggregateGroupBy>;
  max?: Maybe<TaskCommentsMaxAggregate>;
  min?: Maybe<TaskCommentsMinAggregate>;
  sum?: Maybe<TaskCommentsSumAggregate>;
};

export type TaskCommentsAvgAggregate = {
  id?: Maybe<Scalars["Float"]["output"]>;
};

export type TaskCommentsConnection = {
  /** Array of nodes. */
  nodes: Array<TaskComment>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"]["output"];
};

export type TaskCommentsCountAggregate = {
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["Int"]["output"]>;
};

export type TaskCommentsMaxAggregate = {
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type TaskCommentsMinAggregate = {
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type TaskCommentsSumAggregate = {
  id?: Maybe<Scalars["Float"]["output"]>;
};

export type TaskConnection = {
  /** Array of nodes. */
  nodes: Array<Task>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"]["output"];
};

export type TaskCountAggregate = {
  completed?: Maybe<Scalars["Int"]["output"]>;
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["Int"]["output"]>;
  dueDate?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  stageId?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["Int"]["output"]>;
};

export type TaskCreateInput = {
  checklist?: InputMaybe<Array<ChecklistItemInput>>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  dueDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  stageId?: InputMaybe<Scalars["Float"]["input"]>;
  title: Scalars["String"]["input"];
  userIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

export type TaskDeleteFilter = {
  and?: InputMaybe<Array<TaskDeleteFilter>>;
  completed?: InputMaybe<BooleanFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TaskDeleteFilter>>;
  stageId?: InputMaybe<IdFilterComparison>;
  title?: InputMaybe<StringFieldComparison>;
};

export type TaskDeleteResponse = {
  checklist?: Maybe<Array<CheckListItem>>;
  completed?: Maybe<Scalars["Boolean"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  dueDate?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  stageId?: Maybe<Scalars["ID"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type TaskFilter = {
  and?: InputMaybe<Array<TaskFilter>>;
  comments?: InputMaybe<TaskFilterTaskCommentFilter>;
  completed?: InputMaybe<BooleanFieldComparison>;
  createdBy?: InputMaybe<TaskFilterUserFilter>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TaskFilter>>;
  stage?: InputMaybe<TaskFilterTaskStageFilter>;
  stageId?: InputMaybe<IdFilterComparison>;
  title?: InputMaybe<StringFieldComparison>;
  updatedBy?: InputMaybe<TaskFilterUserFilter>;
};

export type TaskFilterTaskCommentFilter = {
  and?: InputMaybe<Array<TaskFilterTaskCommentFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TaskFilterTaskCommentFilter>>;
};

export type TaskFilterTaskStageFilter = {
  and?: InputMaybe<Array<TaskFilterTaskStageFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TaskFilterTaskStageFilter>>;
  title?: InputMaybe<StringFieldComparison>;
};

export type TaskFilterUserFilter = {
  and?: InputMaybe<Array<TaskFilterUserFilter>>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  jobTitle?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TaskFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  role?: InputMaybe<UserRoleFilterComparison>;
  timezone?: InputMaybe<StringFieldComparison>;
};

export type TaskMaxAggregate = {
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  dueDate?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  stageId?: Maybe<Scalars["ID"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type TaskMinAggregate = {
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  dueDate?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  stageId?: Maybe<Scalars["ID"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type TaskSort = {
  direction: SortDirection;
  field: TaskSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export type TaskSortFields =
  | "completed"
  | "createdAt"
  | "description"
  | "dueDate"
  | "id"
  | "stageId"
  | "title"
  | "updatedAt";

export type TaskStage = {
  createdAt: Scalars["DateTime"]["output"];
  createdBy: User;
  id: Scalars["ID"]["output"];
  tasks: Array<Task>;
  tasksAggregate: Array<TaskStageTasksAggregateResponse>;
  title: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  updatedBy?: Maybe<User>;
};

export type TaskStageTasksArgs = {
  filter?: TaskFilter;
  sorting?: Array<TaskSort>;
};

export type TaskStageTasksAggregateArgs = {
  filter?: InputMaybe<TaskAggregateFilter>;
};

export type TaskStageAggregateFilter = {
  and?: InputMaybe<Array<TaskStageAggregateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TaskStageAggregateFilter>>;
  title?: InputMaybe<StringFieldComparison>;
};

export type TaskStageAggregateGroupBy = {
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type TaskStageAggregateGroupByCreatedAtArgs = {
  by?: GroupBy;
};

export type TaskStageAggregateGroupByUpdatedAtArgs = {
  by?: GroupBy;
};

export type TaskStageAggregateResponse = {
  avg?: Maybe<TaskStageAvgAggregate>;
  count?: Maybe<TaskStageCountAggregate>;
  groupBy?: Maybe<TaskStageAggregateGroupBy>;
  max?: Maybe<TaskStageMaxAggregate>;
  min?: Maybe<TaskStageMinAggregate>;
  sum?: Maybe<TaskStageSumAggregate>;
};

export type TaskStageAvgAggregate = {
  id?: Maybe<Scalars["Float"]["output"]>;
};

export type TaskStageConnection = {
  /** Array of nodes. */
  nodes: Array<TaskStage>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"]["output"];
};

export type TaskStageCountAggregate = {
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["Int"]["output"]>;
};

export type TaskStageCreateInput = {
  title: Scalars["String"]["input"];
};

export type TaskStageDeleteFilter = {
  and?: InputMaybe<Array<TaskStageDeleteFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TaskStageDeleteFilter>>;
  title?: InputMaybe<StringFieldComparison>;
};

export type TaskStageDeleteResponse = {
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type TaskStageFilter = {
  and?: InputMaybe<Array<TaskStageFilter>>;
  createdBy?: InputMaybe<TaskStageFilterUserFilter>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TaskStageFilter>>;
  title?: InputMaybe<StringFieldComparison>;
  updatedBy?: InputMaybe<TaskStageFilterUserFilter>;
};

export type TaskStageFilterUserFilter = {
  and?: InputMaybe<Array<TaskStageFilterUserFilter>>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  jobTitle?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TaskStageFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  role?: InputMaybe<UserRoleFilterComparison>;
  timezone?: InputMaybe<StringFieldComparison>;
};

export type TaskStageMaxAggregate = {
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type TaskStageMinAggregate = {
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type TaskStageSort = {
  direction: SortDirection;
  field: TaskStageSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export type TaskStageSortFields = "createdAt" | "id" | "title" | "updatedAt";

export type TaskStageSubscriptionFilter = {
  and?: InputMaybe<Array<TaskStageSubscriptionFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TaskStageSubscriptionFilter>>;
  title?: InputMaybe<StringFieldComparison>;
};

export type TaskStageSumAggregate = {
  id?: Maybe<Scalars["Float"]["output"]>;
};

export type TaskStageTasksAggregateGroupBy = {
  completed?: Maybe<Scalars["Boolean"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  dueDate?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  stageId?: Maybe<Scalars["ID"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type TaskStageTasksAggregateResponse = {
  avg?: Maybe<TaskStageTasksAvgAggregate>;
  count?: Maybe<TaskStageTasksCountAggregate>;
  groupBy?: Maybe<TaskStageTasksAggregateGroupBy>;
  max?: Maybe<TaskStageTasksMaxAggregate>;
  min?: Maybe<TaskStageTasksMinAggregate>;
  sum?: Maybe<TaskStageTasksSumAggregate>;
};

export type TaskStageTasksAvgAggregate = {
  id?: Maybe<Scalars["Float"]["output"]>;
  stageId?: Maybe<Scalars["Float"]["output"]>;
};

export type TaskStageTasksCountAggregate = {
  completed?: Maybe<Scalars["Int"]["output"]>;
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["Int"]["output"]>;
  dueDate?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  stageId?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["Int"]["output"]>;
};

export type TaskStageTasksMaxAggregate = {
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  dueDate?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  stageId?: Maybe<Scalars["ID"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type TaskStageTasksMinAggregate = {
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  dueDate?: Maybe<Scalars["DateTime"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  stageId?: Maybe<Scalars["ID"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type TaskStageTasksSumAggregate = {
  id?: Maybe<Scalars["Float"]["output"]>;
  stageId?: Maybe<Scalars["Float"]["output"]>;
};

export type TaskStageUpdateFilter = {
  and?: InputMaybe<Array<TaskStageUpdateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TaskStageUpdateFilter>>;
  title?: InputMaybe<StringFieldComparison>;
};

export type TaskStageUpdateInput = {
  title: Scalars["String"]["input"];
};

export type TaskSubscriptionFilter = {
  and?: InputMaybe<Array<TaskSubscriptionFilter>>;
  completed?: InputMaybe<BooleanFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TaskSubscriptionFilter>>;
  stageId?: InputMaybe<IdFilterComparison>;
  title?: InputMaybe<StringFieldComparison>;
};

export type TaskSumAggregate = {
  id?: Maybe<Scalars["Float"]["output"]>;
  stageId?: Maybe<Scalars["Float"]["output"]>;
};

export type TaskUpdateFilter = {
  and?: InputMaybe<Array<TaskUpdateFilter>>;
  completed?: InputMaybe<BooleanFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TaskUpdateFilter>>;
  stageId?: InputMaybe<IdFilterComparison>;
  title?: InputMaybe<StringFieldComparison>;
};

export type TaskUpdateInput = {
  checklist?: InputMaybe<Array<ChecklistItemInput>>;
  completed?: InputMaybe<Scalars["Boolean"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  dueDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  stageId?: InputMaybe<Scalars["ID"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  userIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

export type TaskUsersAggregateGroupBy = {
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  jobTitle?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<Role>;
  timezone?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type TaskUsersAggregateResponse = {
  avg?: Maybe<TaskUsersAvgAggregate>;
  count?: Maybe<TaskUsersCountAggregate>;
  groupBy?: Maybe<TaskUsersAggregateGroupBy>;
  max?: Maybe<TaskUsersMaxAggregate>;
  min?: Maybe<TaskUsersMinAggregate>;
  sum?: Maybe<TaskUsersSumAggregate>;
};

export type TaskUsersAvgAggregate = {
  id?: Maybe<Scalars["Float"]["output"]>;
};

export type TaskUsersCountAggregate = {
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  email?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  jobTitle?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["Int"]["output"]>;
  phone?: Maybe<Scalars["Int"]["output"]>;
  role?: Maybe<Scalars["Int"]["output"]>;
  timezone?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["Int"]["output"]>;
};

export type TaskUsersMaxAggregate = {
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  jobTitle?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<Role>;
  timezone?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type TaskUsersMinAggregate = {
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  jobTitle?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<Role>;
  timezone?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type TaskUsersSumAggregate = {
  id?: Maybe<Scalars["Float"]["output"]>;
};

export type UpdateManyEventCategoriesInput = {
  /** Filter used to find fields to update */
  filter: EventCategoryUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: EventCategoryUpdateInput;
};

export type UpdateManyEventsInput = {
  /** Filter used to find fields to update */
  filter: EventUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: EventUpdateInput;
};

export type UpdateManyQuotesInput = {
  /** Filter used to find fields to update */
  filter: QuoteUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: QuoteUpdateInput;
};

export type UpdateManyResponse = {
  /** The number of records updated. */
  updatedCount: Scalars["Int"]["output"];
};

export type UpdateManyTaskCommentsInput = {
  /** Filter used to find fields to update */
  filter: TaskCommentUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: TaskCommentUpdateInput;
};

export type UpdateManyTaskStagesInput = {
  /** Filter used to find fields to update */
  filter: TaskStageUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: TaskStageUpdateInput;
};

export type UpdateManyTasksInput = {
  /** Filter used to find fields to update */
  filter: TaskUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: TaskUpdateInput;
};

export type UpdateManyUsersInput = {
  /** Filter used to find fields to update */
  filter: UserUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UserUpdateInput;
};

export type UpdateOneEventCategoryInput = {
  /** The id of the record to update */
  id: Scalars["ID"]["input"];
  /** The update to apply. */
  update: EventCategoryUpdateInput;
};

export type UpdateOneEventCategorySubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: EventCategorySubscriptionFilter;
};

export type UpdateOneEventInput = {
  /** The id of the record to update */
  id: Scalars["ID"]["input"];
  /** The update to apply. */
  update: EventUpdateInput;
};

export type UpdateOneEventSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: EventSubscriptionFilter;
};

export type UpdateOneQuoteInput = {
  /** The id of the record to update */
  id: Scalars["ID"]["input"];
  /** The update to apply. */
  update: QuoteUpdateInput;
};

export type UpdateOneQuoteSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: QuoteSubscriptionFilter;
};

export type UpdateOneTaskCommentInput = {
  /** The id of the record to update */
  id: Scalars["ID"]["input"];
  /** The update to apply. */
  update: TaskCommentUpdateInput;
};

export type UpdateOneTaskCommentSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: TaskCommentSubscriptionFilter;
};

export type UpdateOneTaskInput = {
  /** The id of the record to update */
  id: Scalars["ID"]["input"];
  /** The update to apply. */
  update: TaskUpdateInput;
};

export type UpdateOneTaskStageInput = {
  /** The id of the record to update */
  id: Scalars["ID"]["input"];
  /** The update to apply. */
  update: TaskStageUpdateInput;
};

export type UpdateOneTaskStageSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: TaskStageSubscriptionFilter;
};

export type UpdateOneTaskSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: TaskSubscriptionFilter;
};

export type UpdateOneUserInput = {
  /** The id of the record to update */
  id: Scalars["ID"]["input"];
  /** The update to apply. */
  update: UserUpdateInput;
};

export type UpdateOneUserSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: UserSubscriptionFilter;
};

export type User = {
  avatarUrl?: Maybe<Scalars["String"]["output"]>;
  contacts: UserContactsConnection;
  createdAt: Scalars["DateTime"]["output"];
  createdBy?: Maybe<User>;
  deals: UserDealsConnection;
  email: Scalars["String"]["output"];
  events: UserEventsConnection;
  id: Scalars["ID"]["output"];
  jobTitle?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  phone?: Maybe<Scalars["String"]["output"]>;
  role: Role;
  tasks: UserTasksConnection;
  timezone?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["DateTime"]["output"];
  updatedBy?: Maybe<User>;
};

export type UserEventsArgs = {
  filter?: EventFilter;
  paging?: OffsetPaging;
  sorting?: Array<EventSort>;
};

export type UserTasksArgs = {
  filter?: TaskFilter;
  paging?: OffsetPaging;
  sorting?: Array<TaskSort>;
};

export type UserAggregateFilter = {
  and?: InputMaybe<Array<UserAggregateFilter>>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  jobTitle?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserAggregateFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  role?: InputMaybe<UserRoleFilterComparison>;
  timezone?: InputMaybe<StringFieldComparison>;
};

export type UserConnection = {
  /** Array of nodes. */
  nodes: Array<User>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"]["output"];
};

export type UserContactsConnection = {
  pageInfo: OffsetPageInfo;
  totalCount: Scalars["Int"]["output"];
};

export type UserCreateInput = {
  email: Scalars["String"]["input"];
  jobTitle: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  phone: Scalars["String"]["input"];
  role: Role;
  timezone: Scalars["String"]["input"];
};

export type UserDealsConnection = {
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"]["output"];
};

export type UserDeleteFilter = {
  and?: InputMaybe<Array<UserDeleteFilter>>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  jobTitle?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserDeleteFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  role?: InputMaybe<UserRoleFilterComparison>;
  timezone?: InputMaybe<StringFieldComparison>;
};

export type UserDeleteResponse = {
  avatarUrl?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  jobTitle?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<Role>;
  timezone?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type UserEventsConnection = {
  /** Array of nodes. */
  nodes: Array<Event>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"]["output"];
};

export type UserFilter = {
  and?: InputMaybe<Array<UserFilter>>;
  contacts?: InputMaybe<UserFilterContactFilter>;
  createdBy?: InputMaybe<UserFilterUserFilter>;
  deals?: InputMaybe<UserFilterDealFilter>;
  email?: InputMaybe<StringFieldComparison>;
  events?: InputMaybe<UserFilterEventFilter>;
  id?: InputMaybe<IdFilterComparison>;
  jobTitle?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  role?: InputMaybe<UserRoleFilterComparison>;
  tasks?: InputMaybe<UserFilterTaskFilter>;
  timezone?: InputMaybe<StringFieldComparison>;
  updatedBy?: InputMaybe<UserFilterUserFilter>;
};
export type UserFilterContactFilter = {
  and?: InputMaybe<Array<UserFilterContactFilter>>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  jobTitle?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserFilterContactFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  score?: InputMaybe<IntFieldComparison>;
  timezone?: InputMaybe<StringFieldComparison>;
};

export type UserFilterDealFilter = {
  and?: InputMaybe<Array<UserFilterDealFilter>>;
  closeDateDay?: InputMaybe<IntFieldComparison>;
  closeDateMonth?: InputMaybe<IntFieldComparison>;
  closeDateYear?: InputMaybe<IntFieldComparison>;
  dealOwnerId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserFilterDealFilter>>;
  stageId?: InputMaybe<IdFilterComparison>;
  title?: InputMaybe<StringFieldComparison>;
  value?: InputMaybe<FloatFieldComparison>;
};

export type UserFilterEventFilter = {
  and?: InputMaybe<Array<UserFilterEventFilter>>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserFilterEventFilter>>;
  title?: InputMaybe<StringFieldComparison>;
};

export type UserFilterTaskFilter = {
  and?: InputMaybe<Array<UserFilterTaskFilter>>;
  completed?: InputMaybe<BooleanFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserFilterTaskFilter>>;
  stageId?: InputMaybe<IdFilterComparison>;
  title?: InputMaybe<StringFieldComparison>;
};

export type UserFilterUserFilter = {
  and?: InputMaybe<Array<UserFilterUserFilter>>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  jobTitle?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserFilterUserFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  role?: InputMaybe<UserRoleFilterComparison>;
  timezone?: InputMaybe<StringFieldComparison>;
};

export type UserRoleFilterComparison = {
  eq?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  neq?: InputMaybe<Role>;
  notIn?: InputMaybe<Array<Role>>;
};

export type UserSort = {
  direction: SortDirection;
  field: UserSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export type UserSortFields =
  | "createdAt"
  | "email"
  | "id"
  | "jobTitle"
  | "name"
  | "phone"
  | "role"
  | "timezone"
  | "updatedAt";

export type UserSubscriptionFilter = {
  and?: InputMaybe<Array<UserSubscriptionFilter>>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  jobTitle?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserSubscriptionFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  role?: InputMaybe<UserRoleFilterComparison>;
  timezone?: InputMaybe<StringFieldComparison>;
};

export type UserTasksConnection = {
  /** Array of nodes. */
  nodes: Array<Task>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"]["output"];
};

export type UserUpdateFilter = {
  and?: InputMaybe<Array<UserUpdateFilter>>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  jobTitle?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserUpdateFilter>>;
  phone?: InputMaybe<StringFieldComparison>;
  role?: InputMaybe<UserRoleFilterComparison>;
  timezone?: InputMaybe<StringFieldComparison>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  jobTitle?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<Role>;
  timezone?: InputMaybe<Scalars["String"]["input"]>;
};
