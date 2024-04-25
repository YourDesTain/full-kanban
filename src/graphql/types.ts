import type * as Types from "./schema.types";

export type UpcomingEventsQueryVariables = Types.Exact<{
  filter: Types.EventFilter;
  sorting?: Types.InputMaybe<Array<Types.EventSort> | Types.EventSort>;
  paging: Types.OffsetPaging;
}>;

export type UpcomingEventsQuery = {
  events: Pick<Types.EventConnection, "totalCount"> & {
    nodes: Array<
      Pick<Types.Event, "id" | "title" | "color" | "startDate" | "endDate">
    >;
  };
};

export type AccountSettingsGetUserQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"]["input"];
}>;

export type AccountSettingsGetUserQuery = {
  user: Pick<
    Types.User,
    "id" | "name" | "email" | "avatarUrl" | "jobTitle" | "phone" | "timezone"
  >;
};

export type AccountSettingsUpdateUserMutationVariables = Types.Exact<{
  input: Types.UpdateOneUserInput;
}>;

export type AccountSettingsUpdateUserMutation = {
  updateOneUser: Pick<
    Types.User,
    "id" | "name" | "email" | "avatarUrl" | "jobTitle" | "phone" | "timezone"
  >;
};

export type EventCategoriesQueryVariables = Types.Exact<{
  filter: Types.EventCategoryFilter;
  sorting?: Types.InputMaybe<
    Array<Types.EventCategorySort> | Types.EventCategorySort
  >;
}>;

export type EventCategoriesQuery = {
  eventCategories: Pick<Types.EventCategoryConnection, "totalCount"> & {
    nodes: Array<Pick<Types.EventCategory, "id" | "title">>;
  };
};

export type UsersSelectQueryVariables = Types.Exact<{
  filter: Types.UserFilter;
  sorting?: Types.InputMaybe<Array<Types.UserSort> | Types.UserSort>;
  paging: Types.OffsetPaging;
}>;

export type UsersSelectQuery = {
  users: { nodes: Array<Pick<Types.User, "id" | "name" | "avatarUrl">> };
};

export type RefreshTokenMutationVariables = Types.Exact<{
  refreshToken: Types.Scalars["String"]["input"];
}>;

export type RefreshTokenMutation = {
  refreshToken: Pick<Types.AuthResponse, "accessToken" | "refreshToken">;
};

export type AdministrationUsersQueryVariables = Types.Exact<{
  filter: Types.UserFilter;
  sorting?: Types.InputMaybe<Array<Types.UserSort> | Types.UserSort>;
  paging: Types.OffsetPaging;
}>;

export type AdministrationUsersQuery = {
  users: Pick<Types.UserConnection, "totalCount"> & {
    nodes: Array<
      Pick<Types.User, "id" | "name" | "jobTitle" | "role" | "avatarUrl">
    >;
  };
};

export type CreateEventCategoriesMutationVariables = Types.Exact<{
  input: Types.CreateManyEventCategoriesInput;
}>;

export type CreateEventCategoriesMutation = {
  createManyEventCategories: Array<Pick<Types.EventCategory, "id" | "title">>;
};

export type EventFragmentFragment = Pick<
  Types.Event,
  | "id"
  | "title"
  | "description"
  | "startDate"
  | "endDate"
  | "color"
  | "createdAt"
> & {
  createdBy: Pick<Types.User, "id" | "name">;
  category: Pick<Types.EventCategory, "id" | "title">;
  participants: Array<Pick<Types.User, "id" | "name">>;
};

export type UpdateEventMutationVariables = Types.Exact<{
  input: Types.UpdateOneEventInput;
}>;

export type UpdateEventMutation = {
  updateOneEvent: Pick<
    Types.Event,
    | "id"
    | "title"
    | "description"
    | "startDate"
    | "endDate"
    | "color"
    | "createdAt"
  > & {
    createdBy: Pick<Types.User, "id" | "name">;
    category: Pick<Types.EventCategory, "id" | "title">;
    participants: Array<Pick<Types.User, "id" | "name">>;
  };
};

export type GetEventQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"]["input"];
}>;

export type GetEventQuery = {
  event: Pick<
    Types.Event,
    | "id"
    | "title"
    | "description"
    | "startDate"
    | "endDate"
    | "color"
    | "createdAt"
  > & {
    createdBy: Pick<Types.User, "id" | "name">;
    category: Pick<Types.EventCategory, "id" | "title">;
    participants: Array<Pick<Types.User, "id" | "name">>;
  };
};

export type ContactShowQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"]["input"];
}>;

export type DashboardTasksChartQueryVariables = Types.Exact<{
  filter: Types.TaskStageFilter;
  sorting?: Types.InputMaybe<Array<Types.TaskStageSort> | Types.TaskStageSort>;
  paging: Types.OffsetPaging;
}>;

export type DashboardTasksChartQuery = {
  taskStages: {
    nodes: Array<
      Pick<Types.TaskStage, "title"> & {
        tasksAggregate: Array<{
          count?: Types.Maybe<Pick<Types.TaskStageTasksCountAggregate, "id">>;
        }>;
      }
    >;
  };
};

export type QuoteFieldsFragment = Pick<
  Types.Quote,
  | "id"
  | "title"
  | "status"
  | "description"
  | "subTotal"
  | "total"
  | "tax"
  | "createdAt"
> & {
  items: Array<
    Pick<
      Types.QuoteItem,
      "title" | "unitPrice" | "quantity" | "discount" | "totalPrice"
    >
  >;
  salesOwner: Pick<Types.User, "id" | "name">;
};

export type QuotesTableQueryVariables = Types.Exact<{
  filter: Types.QuoteFilter;
  sorting: Array<Types.QuoteSort> | Types.QuoteSort;
  paging: Types.OffsetPaging;
}>;

export type QuotesTableQuery = {
  quotes: Pick<Types.QuoteConnection, "totalCount"> & {
    nodes: Array<
      Pick<
        Types.Quote,
        | "id"
        | "title"
        | "status"
        | "description"
        | "subTotal"
        | "total"
        | "tax"
        | "createdAt"
      > & {
        items: Array<
          Pick<
            Types.QuoteItem,
            "title" | "unitPrice" | "quantity" | "discount" | "totalPrice"
          >
        >;
        salesOwner: Pick<Types.User, "id" | "name">;
      }
    >;
  };
};

export type QuotesGetQuoteQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"]["input"];
}>;

export type QuotesGetQuoteQuery = {
  quote: Pick<
    Types.Quote,
    | "id"
    | "title"
    | "status"
    | "description"
    | "subTotal"
    | "total"
    | "tax"
    | "createdAt"
  > & {
    items: Array<
      Pick<
        Types.QuoteItem,
        "title" | "unitPrice" | "quantity" | "discount" | "totalPrice"
      >
    >;
    salesOwner: Pick<Types.User, "id" | "name">;
  };
};

export type QuotesCreateQuoteMutationVariables = Types.Exact<{
  input: Types.CreateOneQuoteInput;
}>;

export type QuotesCreateQuoteMutation = {
  createOneQuote: Pick<
    Types.Quote,
    | "id"
    | "title"
    | "status"
    | "description"
    | "subTotal"
    | "total"
    | "tax"
    | "createdAt"
  > & {
    items: Array<
      Pick<
        Types.QuoteItem,
        "title" | "unitPrice" | "quantity" | "discount" | "totalPrice"
      >
    >;
    salesOwner: Pick<Types.User, "id" | "name">;
  };
};

export type QuotesUpdateQuoteMutationVariables = Types.Exact<{
  input: Types.UpdateOneQuoteInput;
}>;

export type QuotesUpdateQuoteMutation = {
  updateOneQuote: Pick<
    Types.Quote,
    | "id"
    | "title"
    | "status"
    | "description"
    | "subTotal"
    | "total"
    | "tax"
    | "createdAt"
  > & {
    items: Array<
      Pick<
        Types.QuoteItem,
        "title" | "unitPrice" | "quantity" | "discount" | "totalPrice"
      >
    >;
    salesOwner: Pick<Types.User, "id" | "name">;
  };
};

export type TaskStagesSelectQueryVariables = Types.Exact<{
  filter: Types.TaskStageFilter;
  sorting?: Types.InputMaybe<Array<Types.TaskStageSort> | Types.TaskStageSort>;
  paging: Types.OffsetPaging;
}>;

export type TaskStagesSelectQuery = {
  taskStages: { nodes: Array<Pick<Types.TaskStage, "id" | "title">> };
};

export type KanbanCreateStageMutationVariables = Types.Exact<{
  input: Types.CreateOneTaskStageInput;
}>;

export type KanbanCreateStageMutation = {
  createOneTaskStage: Pick<Types.TaskStage, "id" | "title" | "createdAt">;
};

export type KanbanCreateTaskMutationVariables = Types.Exact<{
  input: Types.CreateOneTaskInput;
}>;

export type KanbanCreateTaskMutation = {
  createOneTask: Pick<Types.Task, "id">;
};

export type KanbanUpdateStageMutationVariables = Types.Exact<{
  input: Types.UpdateOneTaskStageInput;
}>;

export type KanbanUpdateStageMutation = {
  updateOneTaskStage: Pick<Types.TaskStage, "id" | "title">;
};

export type KanbanGetTaskQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"]["input"];
}>;

export type KanbanGetTaskQuery = {
  task: Pick<
    Types.Task,
    "id" | "title" | "completed" | "description" | "dueDate"
  > & {
    stage?: Types.Maybe<Pick<Types.TaskStage, "id" | "title">>;
    users: Array<Pick<Types.User, "id" | "name" | "avatarUrl">>;
    checklist: Array<Pick<Types.CheckListItem, "title" | "checked">>;
  };
};

export type KanbanUpdateTaskMutationVariables = Types.Exact<{
  input: Types.UpdateOneTaskInput;
}>;

export type KanbanUpdateTaskMutation = {
  updateOneTask: Pick<
    Types.Task,
    "id" | "title" | "completed" | "description" | "dueDate"
  > & {
    stage?: Types.Maybe<Pick<Types.TaskStage, "id" | "title">>;
    users: Array<Pick<Types.User, "id" | "name" | "avatarUrl">>;
    checklist: Array<Pick<Types.CheckListItem, "title" | "checked">>;
  };
};

export type KanbanTaskCommentsQueryVariables = Types.Exact<{
  filter: Types.TaskCommentFilter;
  sorting?: Types.InputMaybe<
    Array<Types.TaskCommentSort> | Types.TaskCommentSort
  >;
  paging: Types.OffsetPaging;
}>;

export type KanbanTaskCommentsQuery = {
  taskComments: Pick<Types.TaskCommentConnection, "totalCount"> & {
    nodes: Array<
      Pick<Types.TaskComment, "id" | "comment" | "createdAt"> & {
        createdBy: Pick<Types.User, "id" | "name" | "avatarUrl">;
      }
    >;
  };
};

export type KanbanTaskStagesQueryVariables = Types.Exact<{
  filter: Types.TaskStageFilter;
  sorting?: Types.InputMaybe<Array<Types.TaskStageSort> | Types.TaskStageSort>;
  paging: Types.OffsetPaging;
}>;

export type KanbanTaskStagesQuery = {
  taskStages: Pick<Types.TaskStageConnection, "totalCount"> & {
    nodes: Array<Pick<Types.TaskStage, "id" | "title">>;
  };
};

export type KanbanTasksQueryVariables = Types.Exact<{
  filter: Types.TaskFilter;
  sorting?: Types.InputMaybe<Array<Types.TaskSort> | Types.TaskSort>;
  paging: Types.OffsetPaging;
}>;

export type KanbanTasksQuery = {
  tasks: Pick<Types.TaskConnection, "totalCount"> & {
    nodes: Array<
      Pick<
        Types.Task,
        "id" | "title" | "description" | "dueDate" | "completed" | "stageId"
      > & {
        checklist: Array<Pick<Types.CheckListItem, "title" | "checked">>;
        users: Array<Pick<Types.User, "id" | "name" | "avatarUrl">>;
        comments: Pick<Types.TaskCommentsConnection, "totalCount">;
      }
    >;
  };
};

