/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface SwaggerTypeActorGeneratedDataContract {
  avatar_url?: string;
  bio?: string;
  blog?: string;
  collaborators?: number;
  company?: string;
  created_at?: string;
  disk_usage?: number;
  email?: string;
  followers?: number;
  followers_url?: string;
  following?: number;
  following_url?: string;
  gists_url?: string;
  gravatar_id?: string;
  hireable?: boolean;
  html_url?: string;
  id?: number;
  location?: string;
  login?: string;
  name?: string;
  organizations_url?: string;
  owned_private_repos?: number;
  plan?: {
    collaborators?: number;
    name?: string;
    private_repos?: number;
    space?: number;
  };
  private_gists?: number;
  public_gists?: number;
  public_repos?: number;
  starred_url?: string;
  subscriptions_url?: string;
  total_private_repos?: number;
  type?: "User" | "Organization";
  updated_at?: string;
  url?: string;
}

export interface SwaggerTypeAssetGeneratedDataContract {
  content_type?: string;
  created_at?: string;
  download_count?: number;
  id?: number;
  label?: string;
  name?: string;
  size?: number;
  state?: string;
  updated_at?: string;
  uploader?: SwaggerTypeUserGeneratedDataContract;
  url?: string;
}

export interface SwaggerTypeAssetPatchGeneratedDataContract {
  label?: string;
  name: string;
}

export type SwaggerTypeAssetsGeneratedDataContract = SwaggerTypeAssetGeneratedDataContract[];

export type SwaggerTypeAssigneesGeneratedDataContract = SwaggerTypeUserGeneratedDataContract[];

export interface SwaggerTypeBlobGeneratedDataContract {
  content?: string;
  encoding?: "utf-8" | "base64";
  sha?: string;
  size?: number;
}

export interface SwaggerTypeBlobsGeneratedDataContract {
  sha?: string;
}

export interface SwaggerTypeBranchGeneratedDataContract {
  _links?: {
    html?: string;
    self?: string;
  };
  commit?: {
    author?: SwaggerTypeUserGeneratedDataContract;
    commit?: {
      author?: {
        date?: string;
        email?: string;
        name?: string;
      };
      committer?: {
        date?: string;
        email?: string;
        name?: string;
      };
      message?: string;
      tree?: {
        sha?: string;
        url?: string;
      };
      url?: string;
    };
    committer?: SwaggerTypeUserGeneratedDataContract;
    parents?: {
      sha?: string;
      url?: string;
    }[];
    sha?: string;
    url?: string;
  };
  name?: string;
}

export type SwaggerTypeBranchesGeneratedDataContract = {
  commit?: {
    sha?: string;
    url?: string;
  };
  name?: string;
}[];

export type SwaggerTypeCodeFrequencyStatsGeneratedDataContract = number[];

export interface SwaggerTypeCommentGeneratedDataContract {
  body?: string;
}

export interface SwaggerTypeCommentBodyGeneratedDataContract {
  body: string;
}

export type SwaggerTypeCommentsGeneratedDataContract = {
  body?: string;
  created_at?: string;
  id?: number;
  url?: string;
  user?: SwaggerTypeUserGeneratedDataContract;
}[];

export interface SwaggerTypeCommitGeneratedDataContract {
  author?: SwaggerTypeUserGeneratedDataContract;
  commit?: {
    author?: {
      date?: string;
      email?: string;
      name?: string;
    };
    committer?: {
      date?: string;
      email?: string;
      name?: string;
    };
    message?: string;
    tree?: {
      sha?: string;
      url?: string;
    };
    url?: string;
  };
  committer?: SwaggerTypeUserGeneratedDataContract;
  files?: {
    additions?: number;
    blob_url?: string;
    changes?: number;
    deletions?: number;
    filename?: string;
    patch?: string;
    raw_url?: string;
    status?: string;
  }[];
  parents?: {
    sha?: string;
    url?: string;
  }[];
  sha?: string;
  stats?: {
    additions?: number;
    deletions?: number;
    total?: number;
  };
  url?: string;
}

export type SwaggerTypeCommitActivityStatsGeneratedDataContract = {
  days?: number[];
  total?: number;
  week?: number;
}[];

export interface SwaggerTypeCommitCommentGeneratedDataContract {
  body?: string;
  commit_id?: string;
  created_at?: string;
  html_url?: string;
  id?: number;
  line?: number;
  path?: string;
  position?: number;
  updated_at?: string;
  url?: string;
  user?: SwaggerTypeUserGeneratedDataContract;
}

export interface SwaggerTypeCommitCommentBodyGeneratedDataContract {
  body: string;
  line?: string;
  number?: string;
  path?: string;
  position?: number;
  sha: string;
}

export type SwaggerTypeCommitsGeneratedDataContract = {
  author?: SwaggerTypeUserGeneratedDataContract;
  commit?: {
    author?: {
      date?: string;
      email?: string;
      name?: string;
    };
    committer?: {
      date?: string;
      email?: string;
      name?: string;
    };
    message?: string;
    tree?: {
      sha?: string;
      url?: string;
    };
    url?: string;
  };
  committer?: SwaggerTypeUserGeneratedDataContract;
  parents?: {
    sha?: string;
    url?: string;
  }[];
  sha?: string;
  url?: string;
}[];

export interface SwaggerTypeCompareCommitsGeneratedDataContract {
  ahead_by?: number;
  base_commit?: {
    author?: SwaggerTypeUserGeneratedDataContract;
    commit?: {
      author?: {
        date?: string;
        email?: string;
        name?: string;
      };
      committer?: {
        date?: string;
        email?: string;
        name?: string;
      };
      message?: string;
      tree?: {
        sha?: string;
        url?: string;
      };
      url?: string;
    };
    committer?: SwaggerTypeUserGeneratedDataContract;
    parents?: {
      sha?: string;
      url?: string;
    }[];
    sha?: string;
    url?: string;
  };
  behind_by?: number;
  commits?: {
    author?: SwaggerTypeUserGeneratedDataContract;
    commit?: {
      author?: {
        date?: string;
        email?: string;
        name?: string;
      };
      committer?: {
        date?: string;
        email?: string;
        name?: string;
      };
      message?: string;
      tree?: {
        sha?: string;
        url?: string;
      };
      url?: string;
    };
    committer?: SwaggerTypeUserGeneratedDataContract;
    parents?: {
      sha?: string;
      url?: string;
    }[];
    sha?: string;
    url?: string;
  }[];
  diff_url?: string;
  files?: {
    additions?: number;
    blob_url?: string;
    changes?: number;
    contents_url?: string;
    deletions?: number;
    filename?: string;
    patch?: string;
    raw_url?: string;
    sha?: string;
    status?: string;
  }[];
  html_url?: string;
  patch_url?: string;
  permalink_url?: string;
  status?: string;
  total_commits?: number;
  url?: string;
}

export interface SwaggerTypeContentsPathGeneratedDataContract {
  _links?: {
    git?: string;
    html?: string;
    self?: string;
  };
  content?: string;
  encoding?: string;
  git_url?: string;
  html_url?: string;
  name?: string;
  path?: string;
  sha?: string;
  size?: number;
  type?: string;
  url?: string;
}

export type SwaggerTypeContributorsStatsGeneratedDataContract = {
  author?: {
    avatar_url?: string;
    gravatar_id?: string;
    id?: number;
    login?: string;
    url?: string;
  };
  total?: number;
  weeks?: {
    a?: number;
    c?: number;
    d?: number;
    w?: string;
  }[];
}[];

export interface SwaggerTypeCreateFileGeneratedDataContract {
  commit?: {
    author?: {
      date?: string;
      email?: string;
      name?: string;
    };
    committer?: {
      date?: string;
      email?: string;
      name?: string;
    };
    html_url?: string;
    message?: string;
    parents?: {
      html_url?: string;
      sha?: string;
      url?: string;
    }[];
    sha?: string;
    tree?: {
      sha?: string;
      url?: string;
    };
    url?: string;
  };
  content?: {
    _links?: {
      git?: string;
      html?: string;
      self?: string;
    };
    git_url?: string;
    html_url?: string;
    name?: string;
    path?: string;
    sha?: string;
    size?: number;
    type?: string;
    url?: string;
  };
}

export interface SwaggerTypeCreateFileBodyGeneratedDataContract {
  committer?: {
    email?: string;
    name?: string;
  };
  content?: string;
  message?: string;
}

export interface SwaggerTypeDeleteFileGeneratedDataContract {
  commit?: {
    author?: {
      date?: string;
      email?: string;
      name?: string;
    };
    committer?: {
      date?: string;
      email?: string;
      name?: string;
    };
    html_url?: string;
    message?: string;
    parents?: {
      html_url?: string;
      sha?: string;
      url?: string;
    };
    sha?: string;
    tree?: {
      sha?: string;
      url?: string;
    };
    url?: string;
  };
  content?: string;
}

export interface SwaggerTypeDeleteFileBodyGeneratedDataContract {
  committer?: {
    email?: string;
    name?: string;
  };
  message?: string;
  sha?: string;
}

export interface SwaggerTypeDeploymentGeneratedDataContract {
  description?: string;
  payload?: {
    deploy_user?: string;
    environment?: string;
    room_id?: number;
  };
  ref?: string;
}

export interface SwaggerTypeDeploymentRespGeneratedDataContract {
  created_at?: string;
  creator?: SwaggerTypeUserGeneratedDataContract;
  description?: string;
  id?: number;
  payload?: string;
  sha?: string;
  statuses_url?: string;
  updated_at?: string;
  url?: string;
}

export type SwaggerTypeDeploymentStatusesGeneratedDataContract = {
  created_at?: string;
  creator?: SwaggerTypeUserGeneratedDataContract;
  description?: string;
  id?: number;
  payload?: string;
  state?: string;
  target_url?: string;
  updated_at?: string;
  url?: string;
}[];

export interface SwaggerTypeDeploymentStatusesCreateGeneratedDataContract {
  description?: string;
  state?: string;
  target_url?: string;
}

export interface SwaggerTypeDownloadGeneratedDataContract {
  content_type?: string;
  description?: string;
  download_count?: number;
  html_url?: string;
  id?: number;
  name?: string;
  size?: number;
  url?: string;
}

export type SwaggerTypeDownloadsGeneratedDataContract = SwaggerTypeDownloadGeneratedDataContract[];

export interface SwaggerTypeEditTeamGeneratedDataContract {
  name: string;
  permission?: "pull" | "push" | "admin";
}

export type SwaggerTypeEmailsPostGeneratedDataContract = string[];

export type SwaggerTypeEmojisGeneratedDataContract = Record<string, string>;

export interface SwaggerTypeEventGeneratedDataContract {
  actor?: SwaggerTypeActorGeneratedDataContract;
  created_at?: object;
  id?: number;
  org?: SwaggerTypeOrganizationGeneratedDataContract;
  payload?: object;
  public?: boolean;
  repo?: {
    id?: number;
    name?: string;
    url?: string;
  };
  type?: string;
}

export type SwaggerTypeEventsGeneratedDataContract = SwaggerTypeEventGeneratedDataContract[];

export interface SwaggerTypeFeedsGeneratedDataContract {
  _links?: {
    current_user?: {
      href?: string;
      type?: string;
    };
    current_user_actor?: {
      href?: string;
      type?: string;
    };
    current_user_organization?: {
      href?: string;
      type?: string;
    };
    current_user_public?: {
      href?: string;
      type?: string;
    };
    timeline?: {
      href?: string;
      type?: string;
    };
    user?: {
      href?: string;
      type?: string;
    };
  };
  current_user_actor_url?: string;
  current_user_organization_url?: string;
  current_user_public?: string;
  current_user_url?: string;
  timeline_url?: string;
  user_url?: string;
}

export interface SwaggerTypeForkBodyGeneratedDataContract {
  organization?: string;
}

export type SwaggerTypeForksGeneratedDataContract = SwaggerTypeReposGeneratedDataContract;

export interface SwaggerTypeGistGeneratedDataContract {
  comments?: number;
  comments_url?: string;
  created_at?: string;
  description?: string;
  files?: {
    "ring.erl"?: {
      filename?: string;
      raw_url?: string;
      size?: number;
    };
  };
  forks?: {
    created_at?: string;
    url?: string;
    user?: SwaggerTypeUserGeneratedDataContract;
  }[];
  git_pull_url?: string;
  git_push_url?: string;
  history?: {
    change_status?: {
      additions?: number;
      deletions?: number;
      total?: number;
    };
    committed_at?: string;
    url?: string;
    user?: SwaggerTypeUserGeneratedDataContract;
    version?: string;
  }[];
  html_url?: string;
  id?: string;
  public?: boolean;
  url?: string;
  user?: SwaggerTypeUserGeneratedDataContract;
}

export type SwaggerTypeGistsGeneratedDataContract = {
  comments?: number;
  comments_url?: string;
  created_at?: string;
  description?: string;
  files?: {
    "ring.erl"?: {
      filename?: string;
      raw_url?: string;
      size?: number;
    };
  };
  git_pull_url?: string;
  git_push_url?: string;
  html_url?: string;
  id?: string;
  public?: boolean;
  url?: string;
  user?: SwaggerTypeUserGeneratedDataContract;
}[];

export interface SwaggerTypeGitCommitGeneratedDataContract {
  author?: {
    date?: string;
    email?: string;
    name?: string;
  };
  message?: string;
  parents?: string;
  tree?: string;
}

export interface SwaggerTypeGitRefPatchGeneratedDataContract {
  force?: boolean;
  sha?: string;
}

export type SwaggerTypeGitignoreGeneratedDataContract = any[];

export interface SwaggerTypeGitignoreLangGeneratedDataContract {
  name?: string;
  source?: string;
}

export interface SwaggerTypeHeadBranchGeneratedDataContract {
  object?: {
    sha?: string;
    type?: string;
    url?: string;
  };
  ref?: string;
  url?: string;
}

export type SwaggerTypeHookGeneratedDataContract = {
  active?: boolean;
  config?: {
    content_type?: string;
    url?: string;
  };
  created_at?: string;
  events?: (
    | "push"
    | "issues"
    | "issue_comment"
    | "commit_comment"
    | "pull_request"
    | "pull_request_review_comment"
    | "gollum"
    | "watch"
    | "download"
    | "fork"
    | "fork_apply"
    | "member"
    | "public"
    | "team_add"
    | "status"
  )[];
  id?: number;
  name?: string;
  updated_at?: string;
  url?: string;
}[];

export interface SwaggerTypeHookBodyGeneratedDataContract {
  active?: boolean;
  add_events?: string[];
}

export interface SwaggerTypeIssueGeneratedDataContract {
  assignee?: string;
  body?: string;
  labels?: string[];
  milestone?: number;
  title?: string;
}

export interface SwaggerTypeIssueEventGeneratedDataContract {
  actor?: SwaggerTypeActorGeneratedDataContract;
  commit_id?: string;
  created_at?: string;
  event?: string;
  issue?: {
    assignee?: SwaggerTypeUserGeneratedDataContract;
    body?: string;
    closed_at?: string;
    comments?: number;
    created_at?: string;
    html_url?: string;
    labels?: {
      color?: string;
      name?: string;
      url?: string;
    }[];
    milestone?: {
      closed_issues?: number;
      created_at?: string;
      creator?: SwaggerTypeUserGeneratedDataContract;
      description?: string;
      due_on?: string;
      number?: number;
      open_issues?: number;
      state?: "open" | "closed";
      title?: string;
      url?: string;
    };
    number?: number;
    pull_request?: {
      diff_url?: string;
      html_url?: string;
      patch_url?: string;
    };
    state?: "open" | "closed";
    title?: string;
    updated_at?: string;
    url?: string;
    user?: SwaggerTypeUserGeneratedDataContract;
  };
  url?: string;
}

export type SwaggerTypeIssueEventsGeneratedDataContract = SwaggerTypeIssueEventGeneratedDataContract[];

export type SwaggerTypeIssuesGeneratedDataContract = {
  assignee?: SwaggerTypeUserGeneratedDataContract;
  body?: string;
  closed_at?: string;
  comments?: number;
  created_at?: string;
  html_url?: string;
  labels?: {
    color?: string;
    name?: string;
    url?: string;
  }[];
  milestone?: {
    closed_issues?: number;
    created_at?: string;
    creator?: SwaggerTypeUserGeneratedDataContract;
    description?: string;
    due_on?: string;
    number?: number;
    open_issues?: number;
    state?: "open" | "closed";
    title?: string;
    url?: string;
  };
  number?: number;
  pull_request?: {
    diff_url?: string;
    html_url?: string;
    patch_url?: string;
  };
  state?: "open" | "closed";
  title?: string;
  updated_at?: string;
  url?: string;
  user?: SwaggerTypeUserGeneratedDataContract;
}[];

export interface SwaggerTypeIssuesCommentGeneratedDataContract {
  body?: string;
  created_at?: string;
  html_url?: string;
  id?: number;
  updated_at?: string;
  url?: string;
  user?: SwaggerTypeUserGeneratedDataContract;
}

export type SwaggerTypeIssuesCommentsGeneratedDataContract = {
  _links?: {
    html?: {
      href?: string;
    };
    pull_request?: {
      href?: string;
    };
    self?: {
      href?: string;
    };
  };
  body?: string;
  commit_id?: string;
  created_at?: string;
  id?: number;
  path?: string;
  position?: number;
  updated_at?: string;
  url?: string;
  user?: SwaggerTypeUserGeneratedDataContract;
}[];

export type SwaggerTypeKeysGeneratedDataContract = {
  id?: number;
  key?: string;
  title?: string;
  url?: string;
}[];

export interface SwaggerTypeLabelGeneratedDataContract {
  /**
   * @minLength 6
   * @maxLength 6
   */
  color?: string;
  name?: string;
  url?: string;
}

export type SwaggerTypeLabelsGeneratedDataContract = {
  /**
   * @minLength 6
   * @maxLength 6
   */
  color?: string;
  name?: string;
  url?: string;
}[];

export type SwaggerTypeLanguagesGeneratedDataContract = Record<string, number>;

export interface SwaggerTypeMarkdownGeneratedDataContract {
  context?: string;
  mode?: string;
  text?: string;
}

export interface SwaggerTypeMergeGeneratedDataContract {
  merged?: boolean;
  message?: string;
  sha?: string;
}

export interface SwaggerTypeMergePullBodyGeneratedDataContract {
  commit_message?: string;
}

export interface SwaggerTypeMergesBodyGeneratedDataContract {
  base?: string;
  commit_message?: string;
  head?: string;
}

export interface SwaggerTypeMergesConflictGeneratedDataContract {
  message?: string;
}

export interface SwaggerTypeMergesSuccessfulGeneratedDataContract {
  author?: SwaggerTypeUserGeneratedDataContract;
  comments_url?: string;
  commit?: {
    author?: {
      date?: string;
      email?: string;
      name?: string;
    };
    comment_count?: number;
    committer?: {
      date?: string;
      email?: string;
      name?: string;
    };
    message?: string;
    tree?: {
      sha?: string;
      url?: string;
    };
    url?: string;
  };
  committer?: SwaggerTypeUserGeneratedDataContract;
  merged?: boolean;
  message?: string;
  parents?: {
    sha?: string;
    url?: string;
  }[];
  sha?: string;
  url?: string;
}

export interface SwaggerTypeMetaGeneratedDataContract {
  git?: string[];
  hooks?: string[];
}

export interface SwaggerTypeMilestoneGeneratedDataContract {
  closed_issues?: number;
  created_at?: string;
  creator?: SwaggerTypeUserGeneratedDataContract;
  description?: string;
  due_on?: string;
  number?: number;
  open_issues?: number;
  state?: "open" | "closed";
  title?: string;
  url?: string;
}

export interface SwaggerTypeMilestoneUpdateGeneratedDataContract {
  description?: string;
  due_on?: string;
  state?: string;
  title?: string;
}

export interface SwaggerTypeNotificationMarkReadGeneratedDataContract {
  last_read_at?: string;
}

export interface SwaggerTypeNotificationsGeneratedDataContract {
  id?: number;
  last_read_at?: string;
  reason?: string;
  repository?: {
    description?: string;
    fork?: boolean;
    full_name?: string;
    html_url?: string;
    id?: number;
    name?: string;
    owner?: SwaggerTypeActorGeneratedDataContract;
    private?: boolean;
    url?: string;
  };
  subject?: {
    latest_comment_url?: string;
    title?: string;
    type?: string;
    url?: string;
  };
  unread?: boolean;
  updated_at?: string;
  url?: string;
}

export interface SwaggerTypeOrgTeamsPostGeneratedDataContract {
  name: string;
  permission?: "pull" | "push" | "admin";
  repo_names?: string[];
}

export type SwaggerTypeOrganizationGeneratedDataContract = SwaggerTypeActorGeneratedDataContract;

export interface SwaggerTypeOrganizationAsTeamMemberGeneratedDataContract {
  errors?: {
    code?: string;
    field?: string;
    resource?: string;
  }[];
  message?: string;
}

export interface SwaggerTypeParticipationStatsGeneratedDataContract {
  all?: number[];
  owner?: number[];
}

export interface SwaggerTypePatchGistGeneratedDataContract {
  description?: string;
  files?: {
    "delete_this_file.txt"?: string;
    "file1.txt"?: {
      content?: string;
    };
    "new_file.txt"?: {
      content?: string;
    };
    "old_name.txt"?: {
      content?: string;
      filename?: string;
    };
  };
}

export interface SwaggerTypePatchOrgGeneratedDataContract {
  billing_email?: string;
  company?: string;
  email?: string;
  location?: string;
  name?: string;
}

export interface SwaggerTypePostGistGeneratedDataContract {
  description?: string;
  files?: {
    "file1.txt"?: {
      content?: string;
    };
  };
  public?: boolean;
}

export interface SwaggerTypePostRepoGeneratedDataContract {
  auto_init?: boolean;
  description?: string;
  gitignore_template?: string;
  has_downloads?: boolean;
  has_issues?: boolean;
  has_wiki?: boolean;
  homepage?: string;
  name: string;
  private?: boolean;
  team_id?: number;
}

export interface SwaggerTypePullRequestGeneratedDataContract {
  _links?: {
    comments?: {
      href?: string;
    };
    html?: {
      href?: string;
    };
    review_comments?: {
      href?: string;
    };
    self?: {
      href?: string;
    };
  };
  additions?: number;
  base?: {
    label?: string;
    ref?: string;
    repo?: SwaggerTypeRepoGeneratedDataContract;
    sha?: string;
    user?: {
      avatar_url?: string;
      gravatar_id?: string;
      id?: number;
      login?: string;
      url?: string;
    };
  };
  body?: string;
  changed_files?: number;
  closed_at?: string;
  comments?: number;
  commits?: number;
  created_at?: string;
  deletions?: number;
  diff_url?: string;
  head?: {
    label?: string;
    ref?: string;
    repo?: SwaggerTypeRepoGeneratedDataContract;
    sha?: string;
    user?: {
      avatar_url?: string;
      gravatar_id?: string;
      id?: number;
      login?: string;
      url?: string;
    };
  };
  html_url?: string;
  issue_url?: string;
  merge_commit_sha?: string;
  mergeable?: boolean;
  merged?: boolean;
  merged_at?: string;
  merged_by?: {
    avatar_url?: string;
    gravatar_id?: string;
    id?: number;
    login?: string;
    url?: string;
  };
  number?: number;
  patch_url?: string;
  state?: string;
  title?: string;
  updated_at?: string;
  url?: string;
  user?: {
    avatar_url?: string;
    gravatar_id?: string;
    id?: number;
    login?: string;
    url?: string;
  };
}

export interface SwaggerTypePullUpdateGeneratedDataContract {
  body?: string;
  state?: string;
  title?: string;
}

export type SwaggerTypePullsGeneratedDataContract = {
  _links?: {
    comments?: {
      href?: string;
    };
    html?: {
      href?: string;
    };
    review_comments?: {
      href?: string;
    };
    self?: {
      href?: string;
    };
  };
  base?: {
    label?: string;
    ref?: string;
    repo?: SwaggerTypeRepoGeneratedDataContract;
    sha?: string;
    user?: {
      avatar_url?: string;
      gravatar_id?: string;
      id?: number;
      login?: string;
      url?: string;
    };
  };
  body?: string;
  closed_at?: string;
  created_at?: string;
  diff_url?: string;
  head?: {
    label?: string;
    ref?: string;
    repo?: SwaggerTypeRepoGeneratedDataContract;
    sha?: string;
    user?: {
      avatar_url?: string;
      gravatar_id?: string;
      id?: number;
      login?: string;
      url?: string;
    };
  };
  html_url?: string;
  issue_url?: string;
  merged_at?: string;
  number?: number;
  patch_url?: string;
  state?: "open" | "closed";
  title?: string;
  updated_at?: string;
  url?: string;
  user?: {
    avatar_url?: string;
    gravatar_id?: string;
    id?: number;
    login?: string;
    url?: string;
  };
}[];

export interface SwaggerTypePullsCommentGeneratedDataContract {
  _links?: {
    html?: {
      href?: string;
    };
    pull_request?: {
      href?: string;
    };
    self?: {
      href?: string;
    };
  };
  body?: string;
  commit_id?: string;
  created_at?: string;
  id?: number;
  path?: string;
  position?: number;
  updated_at?: string;
  url?: string;
  user?: {
    avatar_url?: string;
    gravatar_id?: string;
    id?: number;
    login?: string;
    url?: string;
  };
}

export interface SwaggerTypePullsCommentPostGeneratedDataContract {
  body?: string;
  commit_id?: string;
  path?: string;
  position?: number;
}

export type SwaggerTypePullsCommentsGeneratedDataContract = {
  _links?: {
    html?: {
      href?: string;
    };
    pull_request?: {
      href?: string;
    };
    self?: {
      href?: string;
    };
  };
  body?: string;
  commit_id?: string;
  created_at?: string;
  id?: number;
  path?: string;
  position?: number;
  updated_at?: string;
  url?: string;
  user?: {
    avatar_url?: string;
    gravatar_id?: string;
    id?: number;
    login?: string;
    url?: string;
  };
}[];

export interface SwaggerTypePullsPostGeneratedDataContract {
  base?: string;
  body?: string;
  head?: string;
  title?: string;
}

export interface SwaggerTypePutSubscriptionGeneratedDataContract {
  created_at?: string;
  ignored?: boolean;
  reason?: object;
  subscribed?: boolean;
  thread_url?: string;
  url?: string;
}

export interface SwaggerTypeRateLimitGeneratedDataContract {
  rate?: {
    limit?: number;
    remaining?: number;
    reset?: number;
  };
}

export type SwaggerTypeRefGeneratedDataContract = {
  created_at?: string;
  creator?: {
    avatar_url?: string;
    gravatar_id?: string;
    id?: number;
    login?: string;
    url?: string;
  };
  description?: string;
  id?: number;
  state?: string;
  target_url?: string;
  updated_at?: string;
  url?: string;
}[];

export type SwaggerTypeRefStatusGeneratedDataContract = {
  commit_url?: string;
  name?: string;
  repository_url?: string;
  sha?: string;
  state?: string;
  statuses?: {
    context?: string;
    created_at?: string;
    description?: string;
    id?: number;
    state?: string;
    target_url?: string;
    updated_at?: string;
    url?: string;
  }[];
}[];

export type SwaggerTypeRefsGeneratedDataContract = {
  object?: {
    sha?: string;
    type?: string;
    url?: string;
  };
  ref?: string;
  url?: string;
}[];

export interface SwaggerTypeRefsBodyGeneratedDataContract {
  ref?: string;
  sha?: string;
}

export interface SwaggerTypeReleaseGeneratedDataContract {
  assets?: {
    content_type?: string;
    created_at?: string;
    download_count?: number;
    id?: number;
    label?: string;
    name?: string;
    size?: number;
    state?: string;
    updated_at?: string;
    uploader?: SwaggerTypeUserGeneratedDataContract;
    url?: string;
  }[];
  assets_url?: string;
  author?: SwaggerTypeUserGeneratedDataContract;
  body?: string;
  created_at?: string;
  draft?: boolean;
  html_url?: string;
  id?: number;
  name?: string;
  prerelease?: boolean;
  published_at?: string;
  tag_name?: string;
  tarball_url?: string;
  target_commitish?: string;
  upload_url?: string;
  url?: string;
  zipball_url?: string;
}

export interface SwaggerTypeReleaseCreateGeneratedDataContract {
  body?: string;
  draft?: boolean;
  name?: string;
  prerelease?: boolean;
  tag_name?: string;
  target_commitish?: string;
}

export type SwaggerTypeReleasesGeneratedDataContract = {
  assets?: {
    content_type?: string;
    created_at?: string;
    download_count?: number;
    id?: number;
    label?: string;
    name?: string;
    size?: number;
    state?: string;
    updated_at?: string;
    uploader?: SwaggerTypeUserGeneratedDataContract;
    url?: string;
  }[];
  assets_url?: string;
  author?: SwaggerTypeUserGeneratedDataContract;
  body?: string;
  created_at?: string;
  draft?: boolean;
  html_url?: string;
  id?: number;
  name?: string;
  prerelease?: boolean;
  published_at?: string;
  tag_name?: string;
  tarball_url?: string;
  target_commitish?: string;
  upload_url?: string;
  url?: string;
  zipball_url?: string;
}[];

export interface SwaggerTypeRepoGeneratedDataContract {
  clone_url?: string;
  created_at?: string;
  description?: string;
  fork?: boolean;
  forks?: number;
  forks_count?: number;
  full_name?: string;
  git_url?: string;
  has_downloads?: boolean;
  has_issues?: boolean;
  has_wiki?: boolean;
  homepage?: string;
  html_url?: string;
  id?: number;
  language?: string;
  master_branch?: string;
  mirror_url?: string;
  name?: string;
  open_issues?: number;
  open_issues_count?: number;
  organization?: SwaggerTypeOrganizationGeneratedDataContract;
  owner?: SwaggerTypeActorGeneratedDataContract;
  parent?: SwaggerTypeRepoGeneratedDataContract;
  private?: boolean;
  pushed_at?: string;
  size?: number;
  source?: SwaggerTypeRepoGeneratedDataContract;
  ssh_url?: string;
  svn_url?: string;
  updated_at?: string;
  url?: string;
  watchers?: number;
  watchers_count?: number;
}

export type SwaggerTypeRepoDeploymentsGeneratedDataContract = {
  created_at?: string;
  creator?: SwaggerTypeUserGeneratedDataContract;
  description?: string;
  id?: number;
  payload?: string;
  sha?: string;
  statuses_url?: string;
  updated_at?: string;
  url?: string;
}[];

export type SwaggerTypeRepoCommentsGeneratedDataContract = {
  body?: string;
  commit_id?: string;
  created_at?: string;
  html_url?: string;
  id?: number;
  line?: number;
  path?: string;
  position?: number;
  updated_at?: string;
  url?: string;
  user?: SwaggerTypeUserGeneratedDataContract;
}[];

export interface SwaggerTypeRepoCommitGeneratedDataContract {
  author?: {
    date?: string;
    email?: string;
    name?: string;
  };
  committer?: {
    date?: string;
    email?: string;
    name?: string;
  };
  message?: string;
  parents?: {
    sha?: string;
    url?: string;
  }[];
  sha?: string;
  tree?: {
    sha?: string;
    url?: string;
  };
  url?: string;
}

export interface SwaggerTypeRepoCommitBodyGeneratedDataContract {
  author?: {
    date?: string;
    email?: string;
    name?: string;
  };
  message: string;
  parents: string[];
  tree: string;
}

export interface SwaggerTypeRepoEditGeneratedDataContract {
  description?: string;
  has_downloads?: boolean;
  has_issues?: boolean;
  has_wiki?: boolean;
  homepage?: string;
  name?: string;
  private?: boolean;
}

export type SwaggerTypeReposGeneratedDataContract = SwaggerTypeRepoGeneratedDataContract[];

export interface SwaggerTypeSearchCodeGeneratedDataContract {
  items?: {
    git_url?: string;
    html_url?: string;
    name?: string;
    path?: string;
    repository?: {
      archive_url?: string;
      assignees_url?: string;
      blobs_url?: string;
      branches_url?: string;
      collaborators_url?: string;
      comments_url?: string;
      commits_url?: string;
      compare_url?: string;
      contents_url?: string;
      contributors_url?: string;
      description?: string;
      downloads_url?: string;
      events_url?: string;
      fork?: boolean;
      forks_url?: string;
      full_name?: string;
      git_commits_url?: string;
      git_refs_url?: string;
      git_tags_url?: string;
      hooks_url?: string;
      html_url?: string;
      id?: number;
      issue_comment_url?: string;
      issue_events_url?: string;
      issues_url?: string;
      keys_url?: string;
      labels_url?: string;
      languages_url?: string;
      merges_url?: string;
      milestones_url?: string;
      name?: string;
      notifications_url?: string;
      owner?: SwaggerTypeActorGeneratedDataContract;
      private?: boolean;
      pulls_url?: string;
      stargazers_url?: string;
      statuses_url?: string;
      subscribers_url?: string;
      subscription_url?: string;
      tags_url?: string;
      teams_url?: string;
      trees_url?: string;
      url?: string;
    };
    score?: number;
    sha?: string;
    url?: string;
  }[];
  total_count?: number;
}

export interface SwaggerTypeSearchIssuesGeneratedDataContract {
  items?: {
    assignee?: any;
    body?: string;
    closed_at?: any;
    comments?: number;
    comments_url?: string;
    created_at?: string;
    events_url?: string;
    html_url?: string;
    id?: number;
    labels?: {
      color?: string;
      name?: string;
      url?: string;
    }[];
    labels_url?: string;
    milestone?: any;
    number?: number;
    pull_request?: {
      diff_url?: any;
      html_url?: any;
      patch_url?: any;
    };
    score?: number;
    state?: string;
    title?: string;
    updated_at?: string;
    url?: string;
    user?: SwaggerTypeUserGeneratedDataContract;
  }[];
  total_count?: number;
}

export interface SwaggerTypeSearchIssuesByKeywordGeneratedDataContract {
  issues?: {
    body?: string;
    comments?: number;
    created_at?: string;
    gravatar_id?: string;
    html_url?: string;
    labels?: string[];
    number?: number;
    position?: number;
    state?: string;
    title?: string;
    updated_at?: string;
    user?: string;
    votes?: number;
  }[];
}

export interface SwaggerTypeSearchRepositoriesGeneratedDataContract {
  items?: SwaggerTypeRepoGeneratedDataContract[];
  total_count?: number;
}

export interface SwaggerTypeSearchRepositoriesByKeywordGeneratedDataContract {
  repositories?: SwaggerTypeRepoGeneratedDataContract[];
}

export interface SwaggerTypeSearchUserByEmailGeneratedDataContract {
  user?: SwaggerTypeUserGeneratedDataContract;
}

export interface SwaggerTypeSearchUsersGeneratedDataContract {
  items?: SwaggerTypeUsersGeneratedDataContract;
  total_count?: number;
}

export interface SwaggerTypeSearchUsersByKeywordGeneratedDataContract {
  users?: SwaggerTypeUsersGeneratedDataContract;
}

export interface SwaggerTypeSubscriptionGeneratedDataContract {
  created_at?: string;
  ignored?: boolean;
  reason?: string;
  repository_url?: string;
  subscribed?: boolean;
  thread_url?: string;
  url?: string;
}

export interface SwaggerTypeSubscriptionBodyGeneratedDataContract {
  ignored?: boolean;
  subscribed?: boolean;
}

export interface SwaggerTypeTagGeneratedDataContract {
  message?: string;
  object?: {
    sha?: string;
    type?: "commit" | "tree" | "blob";
    url?: string;
  };
  sha?: string;
  tag?: string;
  tagger?: {
    date?: string;
    email?: string;
    name?: string;
  };
  url?: string;
}

export interface SwaggerTypeTagBodyGeneratedDataContract {
  message: string;
  object: string;
  tag: string;
  tagger: {
    date?: string;
    email?: string;
    name?: string;
  };
  type: "commit" | "tree" | "blob";
}

export type SwaggerTypeTagsGeneratedDataContract = SwaggerTypeTagGeneratedDataContract[];

export interface SwaggerTypeTeamGeneratedDataContract {
  id?: number;
  members_count?: number;
  name?: string;
  permission?: string;
  repos_count?: number;
  url?: string;
}

export interface SwaggerTypeTeamMembershipGeneratedDataContract {
  state?: string;
  url?: string;
}

export type SwaggerTypeTeamReposGeneratedDataContract = SwaggerTypeReposGeneratedDataContract;

export type SwaggerTypeTeamsGeneratedDataContract = {
  id?: number;
  name?: string;
  url?: string;
}[];

export type SwaggerTypeTeamsListGeneratedDataContract = {
  id?: number;
  members_count?: number;
  name?: string;
  organization?: {
    avatar_url?: string;
    id?: number;
    login?: string;
    url?: string;
  };
  permission?: string;
  repos_count?: number;
  url?: string;
}[];

export interface SwaggerTypeTreeGeneratedDataContract {
  sha?: string;
  tree?: {
    mode?: "100644" | "100755" | "040000" | "160000" | "120000";
    path?: string;
    sha?: string;
    size?: number;
    type?: "blob" | "tree" | "commit";
    url?: string;
  }[];
  url?: string;
}

export interface SwaggerTypeTreesGeneratedDataContract {
  base_tree?: string;
  sha?: string;
  tree?: SwaggerTypeTreeGeneratedDataContract[];
  url?: string;
}

export type SwaggerTypeUserGeneratedDataContract = SwaggerTypeActorGeneratedDataContract;

export type SwaggerTypeUserEmailsGeneratedDataContract = string[];

export interface SwaggerTypeUserKeysKeyIdGeneratedDataContract {
  id?: number;
  key?: string;
  title?: string;
  url?: string;
}

export interface SwaggerTypeUserKeysPostGeneratedDataContract {
  key?: string;
  title?: string;
}

export interface SwaggerTypeUserUpdateGeneratedDataContract {
  bio?: string;
  blog?: string;
  company?: string;
  email?: string;
  hireable?: boolean;
  location?: string;
  name?: string;
}

export type SwaggerTypeUsersGeneratedDataContract = SwaggerTypeUserGeneratedDataContract[];

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://api.github.com";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title GitHub
 * @version v3
 * @termsOfService https://help.github.com/articles/github-terms-of-service/#b-api-terms
 * @baseUrl https://api.github.com
 * @externalDocs https://developer.github.com/v3/
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  someTest = {
    /**
 * No description
 *
 * @name SomeTestList
 * @request GET:/some-test
 * @response `200` `{
    user: {
    foo: number,
    extra: {
    id: number,
    extra: {
    foo: string,
    bar: number,
    baz: string,
    bad: number,
    extra: {
    foo: string,
    bar: number,
    baz: string,
    bad: number,
    extra: {
    foo: string,
    bar: number,
    baz: string,
    bad: number,
    extra: {
    foo: string,
    bar: number,
    baz: string,
    bad: number,

},

},

},

},

},

},

}`
 */
    someTestList: (params: RequestParams = {}) =>
      this.request<
        {
          user: {
            foo: number;
            extra: {
              id: number;
              extra: {
                foo: string;
                bar: number;
                baz: string;
                bad: number;
                extra: {
                  foo: string;
                  bar: number;
                  baz: string;
                  bad: number;
                  extra: {
                    foo: string;
                    bar: number;
                    baz: string;
                    bad: number;
                    extra: {
                      foo: string;
                      bar: number;
                      baz: string;
                      bad: number;
                    };
                  };
                };
              };
            };
          };
        },
        any
      >({
        path: `/some-test`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  pathParams = {
    /**
     * No description
     *
     * @name PathParamsList
     * @request GET:/path-params
     * @response `200` `SwaggerTypeEmojisGeneratedDataContract`
     * @response `403` `void`
     */
    pathParamsList: (petId: number, params: RequestParams = {}) =>
      this.request<SwaggerTypeEmojisGeneratedDataContract, void>({
        path: `/path-params`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  events = {
    /**
     * No description
     *
     * @name EventsList
     * @request GET:/events
     * @response `200` `SwaggerTypeEventsGeneratedDataContract`
     * @response `403` `void`
     */
    eventsList: (params: RequestParams = {}) =>
      this.request<SwaggerTypeEventsGeneratedDataContract, void>({
        path: `/events`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  feeds = {
    /**
     * No description
     *
     * @name FeedsList
     * @request GET:/feeds
     * @response `200` `SwaggerTypeFeedsGeneratedDataContract`
     * @response `403` `void`
     */
    feedsList: (params: RequestParams = {}) =>
      this.request<SwaggerTypeFeedsGeneratedDataContract, void>({
        path: `/feeds`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  gists = {
    /**
     * No description
     *
     * @name GistsList
     * @request GET:/gists
     * @response `200` `SwaggerTypeGistsGeneratedDataContract`
     * @response `403` `void`
     */
    gistsList: (
      query?: {
        since?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeGistsGeneratedDataContract, void>({
        path: `/gists`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GistsCreate
     * @request POST:/gists
     * @response `201` `SwaggerTypeGistGeneratedDataContract`
     * @response `403` `void`
     */
    gistsCreate: (body: SwaggerTypePostGistGeneratedDataContract, params: RequestParams = {}) =>
      this.request<SwaggerTypeGistGeneratedDataContract, void>({
        path: `/gists`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PublicList
     * @request GET:/gists/public
     * @response `200` `SwaggerTypeGistsGeneratedDataContract`
     * @response `403` `void`
     */
    publicList: (
      query?: {
        since?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeGistsGeneratedDataContract, void>({
        path: `/gists/public`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name StarredList
     * @request GET:/gists/starred
     * @response `200` `SwaggerTypeGistsGeneratedDataContract`
     * @response `403` `void`
     */
    starredList: (
      query?: {
        since?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeGistsGeneratedDataContract, void>({
        path: `/gists/starred`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GistsDelete
     * @request DELETE:/gists/{id}
     * @response `204` `void`
     * @response `403` `void`
     */
    gistsDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/gists/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name GistsDetail
     * @request GET:/gists/{id}
     * @response `200` `SwaggerTypeGistGeneratedDataContract`
     * @response `403` `void`
     */
    gistsDetail: (id: number, params: RequestParams = {}) =>
      this.request<SwaggerTypeGistGeneratedDataContract, void>({
        path: `/gists/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GistsPartialUpdate
     * @request PATCH:/gists/{id}
     * @response `200` `SwaggerTypeGistGeneratedDataContract`
     * @response `403` `void`
     */
    gistsPartialUpdate: (id: number, body: SwaggerTypePatchGistGeneratedDataContract, params: RequestParams = {}) =>
      this.request<SwaggerTypeGistGeneratedDataContract, void>({
        path: `/gists/${id}`,
        method: "PATCH",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name CommentsDetail
     * @request GET:/gists/{id}/comments
     * @response `200` `SwaggerTypeCommentsGeneratedDataContract`
     * @response `403` `void`
     */
    commentsDetail: (id: number, params: RequestParams = {}) =>
      this.request<SwaggerTypeCommentsGeneratedDataContract, void>({
        path: `/gists/${id}/comments`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name CommentsCreate
     * @request POST:/gists/{id}/comments
     * @response `201` `SwaggerTypeCommentGeneratedDataContract`
     * @response `403` `void`
     */
    commentsCreate: (id: number, body: SwaggerTypeCommentBodyGeneratedDataContract, params: RequestParams = {}) =>
      this.request<SwaggerTypeCommentGeneratedDataContract, void>({
        path: `/gists/${id}/comments`,
        method: "POST",
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name CommentsDelete
     * @request DELETE:/gists/{id}/comments/{commentId}
     * @response `204` `void`
     * @response `403` `void`
     */
    commentsDelete: (id: number, commentId: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/gists/${id}/comments/${commentId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name CommentsDetail2
     * @request GET:/gists/{id}/comments/{commentId}
     * @originalName commentsDetail
     * @duplicate
     * @response `200` `SwaggerTypeCommentGeneratedDataContract`
     * @response `403` `void`
     */
    commentsDetail2: (id: number, commentId: number, params: RequestParams = {}) =>
      this.request<SwaggerTypeCommentGeneratedDataContract, void>({
        path: `/gists/${id}/comments/${commentId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name CommentsPartialUpdate
     * @request PATCH:/gists/{id}/comments/{commentId}
     * @response `200` `SwaggerTypeCommentGeneratedDataContract`
     * @response `403` `void`
     */
    commentsPartialUpdate: (
      id: number,
      commentId: number,
      body: SwaggerTypeCommentGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeCommentGeneratedDataContract, void>({
        path: `/gists/${id}/comments/${commentId}`,
        method: "PATCH",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ForksCreate
     * @request POST:/gists/{id}/forks
     * @response `204` `void`
     * @response `403` `void`
     * @response `404` `void`
     */
    forksCreate: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/gists/${id}/forks`,
        method: "POST",
        ...params,
      }),

    /**
     * No description
     *
     * @name StarDelete
     * @request DELETE:/gists/{id}/star
     * @response `204` `void`
     * @response `403` `void`
     */
    starDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/gists/${id}/star`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name StarDetail
     * @request GET:/gists/{id}/star
     * @response `204` `void`
     * @response `403` `void`
     * @response `404` `void`
     */
    starDetail: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/gists/${id}/star`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name StarUpdate
     * @request PUT:/gists/{id}/star
     * @response `204` `void`
     * @response `403` `void`
     */
    starUpdate: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/gists/${id}/star`,
        method: "PUT",
        ...params,
      }),
  };
  gitignore = {
    /**
     * No description
     *
     * @name TemplatesList
     * @request GET:/gitignore/templates
     * @response `200` `SwaggerTypeGitignoreGeneratedDataContract`
     * @response `403` `void`
     */
    templatesList: (params: RequestParams = {}) =>
      this.request<SwaggerTypeGitignoreGeneratedDataContract, void>({
        path: `/gitignore/templates`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name TemplatesDetail
     * @request GET:/gitignore/templates/{language}
     * @response `200` `SwaggerTypeGitignoreLangGeneratedDataContract`
     * @response `403` `void`
     */
    templatesDetail: (language: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeGitignoreLangGeneratedDataContract, void>({
        path: `/gitignore/templates/${language}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  issues = {
    /**
     * No description
     *
     * @name IssuesList
     * @request GET:/issues
     * @response `200` `SwaggerTypeIssuesGeneratedDataContract`
     * @response `403` `void`
     */
    issuesList: (
      query: {
        /** @default "all" */
        filter: "assigned" | "created" | "mentioned" | "subscribed" | "all";
        /** @default "open" */
        state: "open" | "closed";
        labels: string;
        /** @default "created" */
        sort: "created" | "updated" | "comments";
        /** @default "desc" */
        direction: "asc" | "desc";
        since?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeIssuesGeneratedDataContract, void>({
        path: `/issues`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  legacy = {
    /**
     * No description
     *
     * @name IssuesSearchDetail
     * @request GET:/legacy/issues/search/{owner}/{repository}/{state}/{keyword}
     * @deprecated
     * @response `200` `SwaggerTypeSearchIssuesByKeywordGeneratedDataContract`
     * @response `403` `void`
     */
    issuesSearchDetail: (
      keyword: string,
      state: "open" | "closed",
      owner: string,
      repository: string,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeSearchIssuesByKeywordGeneratedDataContract, void>({
        path: `/legacy/issues/search/${owner}/${repository}/${state}/${keyword}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReposSearchDetail
     * @request GET:/legacy/repos/search/{keyword}
     * @deprecated
     * @response `200` `SwaggerTypeSearchRepositoriesByKeywordGeneratedDataContract`
     * @response `403` `void`
     */
    reposSearchDetail: (
      keyword: string,
      query?: {
        /** @default "desc" */
        order?: "desc" | "asc";
        language?: string;
        start_page?: string;
        sort?: "updated" | "stars" | "forks";
      },
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeSearchRepositoriesByKeywordGeneratedDataContract, void>({
        path: `/legacy/repos/search/${keyword}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UserEmailDetail
     * @request GET:/legacy/user/email/{email}
     * @deprecated
     * @response `200` `SwaggerTypeSearchUserByEmailGeneratedDataContract`
     * @response `403` `void`
     */
    userEmailDetail: (email: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeSearchUserByEmailGeneratedDataContract, void>({
        path: `/legacy/user/email/${email}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UserSearchDetail
     * @request GET:/legacy/user/search/{keyword}
     * @deprecated
     * @response `200` `SwaggerTypeSearchUsersByKeywordGeneratedDataContract`
     * @response `403` `void`
     */
    userSearchDetail: (
      keyword: string,
      query?: {
        /** @default "desc" */
        order?: "desc" | "asc";
        start_page?: string;
        sort?: "updated" | "stars" | "forks";
      },
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeSearchUsersByKeywordGeneratedDataContract, void>({
        path: `/legacy/user/search/${keyword}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  markdown = {
    /**
     * No description
     *
     * @name MarkdownCreate
     * @request POST:/markdown
     * @response `200` `void`
     * @response `403` `void`
     */
    markdownCreate: (body: SwaggerTypeMarkdownGeneratedDataContract, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/markdown`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name PostMarkdown
     * @request POST:/markdown/raw
     * @response `200` `void`
     * @response `403` `void`
     */
    postMarkdown: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/markdown/raw`,
        method: "POST",
        type: ContentType.Text,
        ...params,
      }),
  };
  meta = {
    /**
     * No description
     *
     * @name MetaList
     * @request GET:/meta
     * @response `200` `SwaggerTypeMetaGeneratedDataContract`
     * @response `403` `void`
     */
    metaList: (params: RequestParams = {}) =>
      this.request<SwaggerTypeMetaGeneratedDataContract, void>({
        path: `/meta`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  networks = {
    /**
     * No description
     *
     * @name EventsDetail
     * @request GET:/networks/{owner}/{repo}/events
     * @response `200` `SwaggerTypeEventsGeneratedDataContract`
     * @response `403` `void`
     */
    eventsDetail: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeEventsGeneratedDataContract, void>({
        path: `/networks/${owner}/${repo}/events`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  notifications = {
    /**
     * No description
     *
     * @name NotificationsList
     * @request GET:/notifications
     * @response `200` `SwaggerTypeNotificationsGeneratedDataContract`
     * @response `403` `void`
     */
    notificationsList: (
      query?: {
        all?: boolean;
        participating?: boolean;
        since?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeNotificationsGeneratedDataContract, void>({
        path: `/notifications`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name NotificationsUpdate
     * @request PUT:/notifications
     * @response `205` `void`
     * @response `403` `void`
     */
    notificationsUpdate: (body: SwaggerTypeNotificationMarkReadGeneratedDataContract, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/notifications`,
        method: "PUT",
        body: body,
        ...params,
      }),

    /**
     * No description
     *
     * @name ThreadsDetail
     * @request GET:/notifications/threads/{id}
     * @response `200` `SwaggerTypeNotificationsGeneratedDataContract`
     * @response `403` `void`
     */
    threadsDetail: (id: number, params: RequestParams = {}) =>
      this.request<SwaggerTypeNotificationsGeneratedDataContract, void>({
        path: `/notifications/threads/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ThreadsPartialUpdate
     * @request PATCH:/notifications/threads/{id}
     * @response `205` `void`
     * @response `403` `void`
     */
    threadsPartialUpdate: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/notifications/threads/${id}`,
        method: "PATCH",
        ...params,
      }),

    /**
     * No description
     *
     * @name ThreadsSubscriptionDelete
     * @request DELETE:/notifications/threads/{id}/subscription
     * @response `204` `void`
     * @response `403` `void`
     */
    threadsSubscriptionDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/notifications/threads/${id}/subscription`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name ThreadsSubscriptionDetail
     * @request GET:/notifications/threads/{id}/subscription
     * @response `200` `SwaggerTypeSubscriptionGeneratedDataContract`
     * @response `403` `void`
     */
    threadsSubscriptionDetail: (id: number, params: RequestParams = {}) =>
      this.request<SwaggerTypeSubscriptionGeneratedDataContract, void>({
        path: `/notifications/threads/${id}/subscription`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ThreadsSubscriptionUpdate
     * @request PUT:/notifications/threads/{id}/subscription
     * @response `200` `SwaggerTypeSubscriptionGeneratedDataContract`
     * @response `403` `void`
     */
    threadsSubscriptionUpdate: (
      id: number,
      body: SwaggerTypePutSubscriptionGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeSubscriptionGeneratedDataContract, void>({
        path: `/notifications/threads/${id}/subscription`,
        method: "PUT",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  orgs = {
    /**
     * No description
     *
     * @name OrgsDetail
     * @request GET:/orgs/{org}
     * @response `200` `SwaggerTypeOrganizationGeneratedDataContract`
     * @response `403` `void`
     */
    orgsDetail: (org: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeOrganizationGeneratedDataContract, void>({
        path: `/orgs/${org}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OrgsPartialUpdate
     * @request PATCH:/orgs/{org}
     * @response `200` `SwaggerTypeOrganizationGeneratedDataContract`
     * @response `403` `void`
     */
    orgsPartialUpdate: (org: string, body: SwaggerTypePatchOrgGeneratedDataContract, params: RequestParams = {}) =>
      this.request<SwaggerTypeOrganizationGeneratedDataContract, void>({
        path: `/orgs/${org}`,
        method: "PATCH",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name EventsDetail
     * @request GET:/orgs/{org}/events
     * @response `200` `SwaggerTypeEventsGeneratedDataContract`
     * @response `403` `void`
     */
    eventsDetail: (org: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeEventsGeneratedDataContract, void>({
        path: `/orgs/${org}/events`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name IssuesDetail
     * @request GET:/orgs/{org}/issues
     * @response `200` `SwaggerTypeIssuesGeneratedDataContract`
     * @response `403` `void`
     */
    issuesDetail: (
      org: string,
      query: {
        /** @default "all" */
        filter: "assigned" | "created" | "mentioned" | "subscribed" | "all";
        /** @default "open" */
        state: "open" | "closed";
        labels: string;
        /** @default "created" */
        sort: "created" | "updated" | "comments";
        /** @default "desc" */
        direction: "asc" | "desc";
        since?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeIssuesGeneratedDataContract, void>({
        path: `/orgs/${org}/issues`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name MembersDetail
     * @request GET:/orgs/{org}/members
     * @response `200` `SwaggerTypeUsersGeneratedDataContract`
     * @response `302` `void`
     * @response `403` `void`
     */
    membersDetail: (org: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeUsersGeneratedDataContract, void>({
        path: `/orgs/${org}/members`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name MembersDelete
     * @request DELETE:/orgs/{org}/members/{username}
     * @response `204` `void`
     * @response `403` `void`
     */
    membersDelete: (org: string, username: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/orgs/${org}/members/${username}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name MembersDetail2
     * @request GET:/orgs/{org}/members/{username}
     * @originalName membersDetail
     * @duplicate
     * @response `204` `void`
     * @response `302` `void`
     * @response `403` `void`
     * @response `404` `void`
     */
    membersDetail2: (org: string, username: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/orgs/${org}/members/${username}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name PublicMembersDetail
     * @request GET:/orgs/{org}/public_members
     * @response `200` `SwaggerTypeUsersGeneratedDataContract`
     * @response `403` `void`
     */
    publicMembersDetail: (org: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeUsersGeneratedDataContract, void>({
        path: `/orgs/${org}/public_members`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PublicMembersDelete
     * @request DELETE:/orgs/{org}/public_members/{username}
     * @response `204` `void`
     * @response `403` `void`
     */
    publicMembersDelete: (org: string, username: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/orgs/${org}/public_members/${username}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name PublicMembersDetail2
     * @request GET:/orgs/{org}/public_members/{username}
     * @originalName publicMembersDetail
     * @duplicate
     * @response `204` `void`
     * @response `403` `void`
     * @response `404` `void`
     */
    publicMembersDetail2: (org: string, username: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/orgs/${org}/public_members/${username}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name PublicMembersUpdate
     * @request PUT:/orgs/{org}/public_members/{username}
     * @response `204` `void`
     * @response `403` `void`
     */
    publicMembersUpdate: (org: string, username: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/orgs/${org}/public_members/${username}`,
        method: "PUT",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReposDetail
     * @request GET:/orgs/{org}/repos
     * @response `200` `SwaggerTypeReposGeneratedDataContract`
     * @response `403` `void`
     */
    reposDetail: (
      org: string,
      query?: {
        /** @default "all" */
        type?: "all" | "public" | "private" | "forks" | "sources" | "member";
      },
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeReposGeneratedDataContract, void>({
        path: `/orgs/${org}/repos`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReposCreate
     * @request POST:/orgs/{org}/repos
     * @response `201` `SwaggerTypeReposGeneratedDataContract`
     * @response `403` `void`
     */
    reposCreate: (org: string, body: SwaggerTypePostRepoGeneratedDataContract, params: RequestParams = {}) =>
      this.request<SwaggerTypeReposGeneratedDataContract, void>({
        path: `/orgs/${org}/repos`,
        method: "POST",
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name TeamsDetail
     * @request GET:/orgs/{org}/teams
     * @response `200` `SwaggerTypeTeamsGeneratedDataContract`
     * @response `403` `void`
     */
    teamsDetail: (org: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeTeamsGeneratedDataContract, void>({
        path: `/orgs/${org}/teams`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name TeamsCreate
     * @request POST:/orgs/{org}/teams
     * @response `201` `SwaggerTypeTeamGeneratedDataContract`
     * @response `403` `void`
     */
    teamsCreate: (org: string, body: SwaggerTypeOrgTeamsPostGeneratedDataContract, params: RequestParams = {}) =>
      this.request<SwaggerTypeTeamGeneratedDataContract, void>({
        path: `/orgs/${org}/teams`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  rateLimit = {
    /**
     * No description
     *
     * @name RateLimitList
     * @request GET:/rate_limit
     * @response `200` `SwaggerTypeRateLimitGeneratedDataContract`
     * @response `403` `void`
     */
    rateLimitList: (params: RequestParams = {}) =>
      this.request<SwaggerTypeRateLimitGeneratedDataContract, void>({
        path: `/rate_limit`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  repos = {
    /**
     * No description
     *
     * @name ReposDelete
     * @request DELETE:/repos/{owner}/{repo}
     * @response `204` `void`
     * @response `403` `void`
     */
    reposDelete: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/repos/${owner}/${repo}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReposDetail
     * @request GET:/repos/{owner}/{repo}
     * @response `200` `SwaggerTypeRepoGeneratedDataContract`
     * @response `403` `void`
     */
    reposDetail: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeRepoGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReposPartialUpdate
     * @request PATCH:/repos/{owner}/{repo}
     * @response `200` `SwaggerTypeRepoGeneratedDataContract`
     * @response `403` `void`
     */
    reposPartialUpdate: (
      owner: string,
      repo: string,
      body: SwaggerTypeRepoEditGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeRepoGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}`,
        method: "PATCH",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name AssigneesDetail
     * @request GET:/repos/{owner}/{repo}/assignees
     * @response `200` `SwaggerTypeAssigneesGeneratedDataContract`
     * @response `403` `void`
     */
    assigneesDetail: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeAssigneesGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/assignees`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name AssigneesDetail2
     * @request GET:/repos/{owner}/{repo}/assignees/{assignee}
     * @originalName assigneesDetail
     * @duplicate
     * @response `204` `void`
     * @response `403` `void`
     * @response `404` `void`
     */
    assigneesDetail2: (owner: string, repo: string, assignee: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/repos/${owner}/${repo}/assignees/${assignee}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name BranchesDetail
     * @request GET:/repos/{owner}/{repo}/branches
     * @response `200` `SwaggerTypeBranchesGeneratedDataContract`
     * @response `403` `void`
     */
    branchesDetail: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeBranchesGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/branches`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name BranchesDetail2
     * @request GET:/repos/{owner}/{repo}/branches/{branch}
     * @originalName branchesDetail
     * @duplicate
     * @response `200` `SwaggerTypeBranchGeneratedDataContract`
     * @response `403` `void`
     */
    branchesDetail2: (owner: string, repo: string, branch: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeBranchGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/branches/${branch}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name CollaboratorsDetail
     * @request GET:/repos/{owner}/{repo}/collaborators
     * @response `200` `SwaggerTypeUsersGeneratedDataContract`
     * @response `403` `void`
     */
    collaboratorsDetail: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeUsersGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/collaborators`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name CollaboratorsDelete
     * @request DELETE:/repos/{owner}/{repo}/collaborators/{user}
     * @response `204` `void`
     * @response `403` `void`
     */
    collaboratorsDelete: (owner: string, repo: string, user: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/repos/${owner}/${repo}/collaborators/${user}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name CollaboratorsDetail2
     * @request GET:/repos/{owner}/{repo}/collaborators/{user}
     * @originalName collaboratorsDetail
     * @duplicate
     * @response `204` `void`
     * @response `403` `void`
     * @response `404` `void`
     */
    collaboratorsDetail2: (owner: string, repo: string, user: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/repos/${owner}/${repo}/collaborators/${user}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name CollaboratorsUpdate
     * @request PUT:/repos/{owner}/{repo}/collaborators/{user}
     * @response `204` `void`
     * @response `403` `void`
     */
    collaboratorsUpdate: (owner: string, repo: string, user: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/repos/${owner}/${repo}/collaborators/${user}`,
        method: "PUT",
        ...params,
      }),

    /**
     * No description
     *
     * @name CommentsDetail
     * @request GET:/repos/{owner}/{repo}/comments
     * @response `200` `SwaggerTypeRepoCommentsGeneratedDataContract`
     * @response `403` `void`
     */
    commentsDetail: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeRepoCommentsGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/comments`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name CommentsDelete
     * @request DELETE:/repos/{owner}/{repo}/comments/{commentId}
     * @response `204` `void`
     * @response `403` `void`
     */
    commentsDelete: (owner: string, repo: string, commentId: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/repos/${owner}/${repo}/comments/${commentId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name CommentsDetail2
     * @request GET:/repos/{owner}/{repo}/comments/{commentId}
     * @originalName commentsDetail
     * @duplicate
     * @response `200` `SwaggerTypeCommitCommentGeneratedDataContract`
     * @response `403` `void`
     */
    commentsDetail2: (owner: string, repo: string, commentId: number, params: RequestParams = {}) =>
      this.request<SwaggerTypeCommitCommentGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/comments/${commentId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name CommentsPartialUpdate
     * @request PATCH:/repos/{owner}/{repo}/comments/{commentId}
     * @response `200` `SwaggerTypeCommitCommentGeneratedDataContract`
     * @response `403` `void`
     */
    commentsPartialUpdate: (
      owner: string,
      repo: string,
      commentId: number,
      body: SwaggerTypeCommentBodyGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeCommitCommentGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/comments/${commentId}`,
        method: "PATCH",
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name CommitsDetail
     * @request GET:/repos/{owner}/{repo}/commits
     * @response `200` `SwaggerTypeCommitsGeneratedDataContract`
     * @response `403` `void`
     */
    commitsDetail: (
      owner: string,
      repo: string,
      query?: {
        since?: string;
        sha?: string;
        path?: string;
        author?: string;
        until?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeCommitsGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/commits`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name CommitsStatusDetail
     * @request GET:/repos/{owner}/{repo}/commits/{ref}/status
     * @response `200` `SwaggerTypeRefStatusGeneratedDataContract`
     * @response `403` `void`
     */
    commitsStatusDetail: (owner: string, repo: string, ref: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeRefStatusGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/commits/${ref}/status`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name CommitsDetail2
     * @request GET:/repos/{owner}/{repo}/commits/{shaCode}
     * @originalName commitsDetail
     * @duplicate
     * @response `200` `SwaggerTypeCommitGeneratedDataContract`
     * @response `403` `void`
     */
    commitsDetail2: (owner: string, repo: string, shaCode: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeCommitGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/commits/${shaCode}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name CommitsCommentsDetail
     * @request GET:/repos/{owner}/{repo}/commits/{shaCode}/comments
     * @response `200` `SwaggerTypeRepoCommentsGeneratedDataContract`
     * @response `403` `void`
     */
    commitsCommentsDetail: (owner: string, repo: string, shaCode: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeRepoCommentsGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/commits/${shaCode}/comments`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name CommitsCommentsCreate
     * @request POST:/repos/{owner}/{repo}/commits/{shaCode}/comments
     * @response `201` `SwaggerTypeCommitCommentGeneratedDataContract`
     * @response `403` `void`
     */
    commitsCommentsCreate: (
      owner: string,
      repo: string,
      shaCode: string,
      body: SwaggerTypeCommitCommentBodyGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeCommitCommentGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/commits/${shaCode}/comments`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name CompareDetail
     * @request GET:/repos/{owner}/{repo}/compare/{baseId}...{headId}
     * @response `200` `SwaggerTypeCompareCommitsGeneratedDataContract`
     * @response `403` `void`
     */
    compareDetail: (owner: string, repo: string, baseId: string, headId: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeCompareCommitsGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/compare/${baseId}...${headId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ContentsDelete
     * @request DELETE:/repos/{owner}/{repo}/contents/{path}
     * @response `200` `SwaggerTypeDeleteFileGeneratedDataContract`
     * @response `403` `void`
     */
    contentsDelete: (
      owner: string,
      repo: string,
      path: string,
      body: SwaggerTypeDeleteFileBodyGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeDeleteFileGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/contents/${path}`,
        method: "DELETE",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ContentsDetail
     * @request GET:/repos/{owner}/{repo}/contents/{path}
     * @response `200` `SwaggerTypeContentsPathGeneratedDataContract`
     * @response `403` `void`
     */
    contentsDetail: (
      owner: string,
      repo: string,
      path: string,
      query?: {
        path?: string;
        ref?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeContentsPathGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/contents/${path}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ContentsUpdate
     * @request PUT:/repos/{owner}/{repo}/contents/{path}
     * @response `200` `SwaggerTypeCreateFileGeneratedDataContract`
     * @response `403` `void`
     */
    contentsUpdate: (
      owner: string,
      repo: string,
      path: string,
      body: SwaggerTypeCreateFileBodyGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeCreateFileGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/contents/${path}`,
        method: "PUT",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ContributorsDetail
     * @request GET:/repos/{owner}/{repo}/contributors
     * @response `200` `SwaggerTypeUsersGeneratedDataContract`
     * @response `403` `void`
     */
    contributorsDetail: (
      owner: string,
      repo: string,
      query: {
        anon: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeUsersGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/contributors`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeploymentsDetail
     * @request GET:/repos/{owner}/{repo}/deployments
     * @response `200` `SwaggerTypeRepoDeploymentsGeneratedDataContract`
     * @response `403` `void`
     */
    deploymentsDetail: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeRepoDeploymentsGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/deployments`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeploymentsCreate
     * @request POST:/repos/{owner}/{repo}/deployments
     * @response `201` `SwaggerTypeDeploymentRespGeneratedDataContract`
     * @response `403` `void`
     */
    deploymentsCreate: (
      owner: string,
      repo: string,
      body: SwaggerTypeDeploymentGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeDeploymentRespGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/deployments`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeploymentsStatusesDetail
     * @request GET:/repos/{owner}/{repo}/deployments/{id}/statuses
     * @response `200` `SwaggerTypeDeploymentStatusesGeneratedDataContract`
     * @response `403` `void`
     */
    deploymentsStatusesDetail: (owner: string, repo: string, id: number, params: RequestParams = {}) =>
      this.request<SwaggerTypeDeploymentStatusesGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/deployments/${id}/statuses`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeploymentsStatusesCreate
     * @request POST:/repos/{owner}/{repo}/deployments/{id}/statuses
     * @response `201` `void`
     * @response `403` `void`
     */
    deploymentsStatusesCreate: (
      owner: string,
      repo: string,
      id: number,
      body: SwaggerTypeDeploymentStatusesCreateGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/repos/${owner}/${repo}/deployments/${id}/statuses`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name DownloadsDetail
     * @request GET:/repos/{owner}/{repo}/downloads
     * @deprecated
     * @response `200` `SwaggerTypeDownloadsGeneratedDataContract`
     * @response `403` `void`
     */
    downloadsDetail: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeDownloadsGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/downloads`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DownloadsDelete
     * @request DELETE:/repos/{owner}/{repo}/downloads/{downloadId}
     * @deprecated
     * @response `204` `void`
     * @response `403` `void`
     */
    downloadsDelete: (owner: string, repo: string, downloadId: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/repos/${owner}/${repo}/downloads/${downloadId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name DownloadsDetail2
     * @request GET:/repos/{owner}/{repo}/downloads/{downloadId}
     * @deprecated
     * @originalName downloadsDetail
     * @duplicate
     * @response `200` `SwaggerTypeDownloadGeneratedDataContract`
     * @response `403` `void`
     */
    downloadsDetail2: (owner: string, repo: string, downloadId: number, params: RequestParams = {}) =>
      this.request<SwaggerTypeDownloadGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/downloads/${downloadId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name EventsDetail
     * @request GET:/repos/{owner}/{repo}/events
     * @response `200` `SwaggerTypeEventsGeneratedDataContract`
     * @response `403` `void`
     */
    eventsDetail: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeEventsGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/events`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ForksDetail
     * @request GET:/repos/{owner}/{repo}/forks
     * @response `200` `SwaggerTypeForksGeneratedDataContract`
     * @response `403` `void`
     */
    forksDetail: (
      owner: string,
      repo: string,
      query?: {
        /** @default "newes" */
        sort?: "newes" | "oldes" | "watchers";
      },
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeForksGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/forks`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ForksCreate
     * @request POST:/repos/{owner}/{repo}/forks
     * @response `201` `SwaggerTypeRepoGeneratedDataContract`
     * @response `403` `void`
     */
    forksCreate: (
      owner: string,
      repo: string,
      body: SwaggerTypeForkBodyGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeRepoGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/forks`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GitBlobsCreate
     * @request POST:/repos/{owner}/{repo}/git/blobs
     * @response `201` `SwaggerTypeBlobsGeneratedDataContract`
     * @response `403` `void`
     */
    gitBlobsCreate: (
      owner: string,
      repo: string,
      body: SwaggerTypeBlobGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeBlobsGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/git/blobs`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GitBlobsDetail
     * @request GET:/repos/{owner}/{repo}/git/blobs/{shaCode}
     * @response `200` `SwaggerTypeBlobGeneratedDataContract`
     * @response `403` `void`
     */
    gitBlobsDetail: (owner: string, repo: string, shaCode: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeBlobGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/git/blobs/${shaCode}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GitCommitsCreate
     * @request POST:/repos/{owner}/{repo}/git/commits
     * @response `201` `SwaggerTypeGitCommitGeneratedDataContract`
     * @response `403` `void`
     */
    gitCommitsCreate: (
      owner: string,
      repo: string,
      body: SwaggerTypeRepoCommitBodyGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeGitCommitGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/git/commits`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GitCommitsDetail
     * @request GET:/repos/{owner}/{repo}/git/commits/{shaCode}
     * @response `200` `SwaggerTypeRepoCommitGeneratedDataContract`
     * @response `403` `void`
     */
    gitCommitsDetail: (owner: string, repo: string, shaCode: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeRepoCommitGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/git/commits/${shaCode}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GitRefsDetail
     * @request GET:/repos/{owner}/{repo}/git/refs
     * @response `200` `SwaggerTypeRefsGeneratedDataContract`
     * @response `403` `void`
     */
    gitRefsDetail: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeRefsGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/git/refs`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GitRefsCreate
     * @request POST:/repos/{owner}/{repo}/git/refs
     * @response `201` `SwaggerTypeHeadBranchGeneratedDataContract`
     * @response `403` `void`
     */
    gitRefsCreate: (
      owner: string,
      repo: string,
      body: SwaggerTypeRefsBodyGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeHeadBranchGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/git/refs`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GitRefsDelete
     * @request DELETE:/repos/{owner}/{repo}/git/refs/{ref}
     * @response `204` `void`
     * @response `403` `void`
     */
    gitRefsDelete: (owner: string, repo: string, ref: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/repos/${owner}/${repo}/git/refs/${ref}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name GitRefsDetail2
     * @request GET:/repos/{owner}/{repo}/git/refs/{ref}
     * @originalName gitRefsDetail
     * @duplicate
     * @response `200` `SwaggerTypeHeadBranchGeneratedDataContract`
     * @response `403` `void`
     */
    gitRefsDetail2: (owner: string, repo: string, ref: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeHeadBranchGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/git/refs/${ref}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GitRefsPartialUpdate
     * @request PATCH:/repos/{owner}/{repo}/git/refs/{ref}
     * @response `200` `SwaggerTypeHeadBranchGeneratedDataContract`
     * @response `403` `void`
     */
    gitRefsPartialUpdate: (
      owner: string,
      repo: string,
      ref: string,
      body: SwaggerTypeGitRefPatchGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeHeadBranchGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/git/refs/${ref}`,
        method: "PATCH",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GitTagsCreate
     * @request POST:/repos/{owner}/{repo}/git/tags
     * @response `201` `SwaggerTypeTagGeneratedDataContract`
     * @response `403` `void`
     */
    gitTagsCreate: (
      owner: string,
      repo: string,
      body: SwaggerTypeTagBodyGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeTagGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/git/tags`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GitTagsDetail
     * @request GET:/repos/{owner}/{repo}/git/tags/{shaCode}
     * @response `200` `SwaggerTypeTagGeneratedDataContract`
     * @response `403` `void`
     */
    gitTagsDetail: (owner: string, repo: string, shaCode: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeTagGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/git/tags/${shaCode}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GitTreesCreate
     * @request POST:/repos/{owner}/{repo}/git/trees
     * @response `201` `SwaggerTypeTreesGeneratedDataContract`
     * @response `403` `void`
     */
    gitTreesCreate: (
      owner: string,
      repo: string,
      body: SwaggerTypeTreeGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeTreesGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/git/trees`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GitTreesDetail
     * @request GET:/repos/{owner}/{repo}/git/trees/{shaCode}
     * @response `200` `SwaggerTypeTreeGeneratedDataContract`
     * @response `403` `void`
     */
    gitTreesDetail: (
      owner: string,
      repo: string,
      shaCode: string,
      query?: {
        recursive?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeTreeGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/git/trees/${shaCode}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name HooksDetail
     * @request GET:/repos/{owner}/{repo}/hooks
     * @response `200` `SwaggerTypeHookGeneratedDataContract`
     * @response `403` `void`
     */
    hooksDetail: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeHookGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/hooks`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name HooksCreate
     * @request POST:/repos/{owner}/{repo}/hooks
     * @response `201` `SwaggerTypeHookGeneratedDataContract`
     * @response `403` `void`
     */
    hooksCreate: (
      owner: string,
      repo: string,
      body: SwaggerTypeHookBodyGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeHookGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/hooks`,
        method: "POST",
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name HooksDelete
     * @request DELETE:/repos/{owner}/{repo}/hooks/{hookId}
     * @response `204` `void`
     * @response `403` `void`
     */
    hooksDelete: (owner: string, repo: string, hookId: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/repos/${owner}/${repo}/hooks/${hookId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name HooksDetail2
     * @request GET:/repos/{owner}/{repo}/hooks/{hookId}
     * @originalName hooksDetail
     * @duplicate
     * @response `200` `SwaggerTypeHookGeneratedDataContract`
     * @response `403` `void`
     */
    hooksDetail2: (owner: string, repo: string, hookId: number, params: RequestParams = {}) =>
      this.request<SwaggerTypeHookGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/hooks/${hookId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name HooksPartialUpdate
     * @request PATCH:/repos/{owner}/{repo}/hooks/{hookId}
     * @response `200` `SwaggerTypeHookGeneratedDataContract`
     * @response `403` `void`
     */
    hooksPartialUpdate: (
      owner: string,
      repo: string,
      hookId: number,
      body: SwaggerTypeHookBodyGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeHookGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/hooks/${hookId}`,
        method: "PATCH",
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name HooksTestsCreate
     * @request POST:/repos/{owner}/{repo}/hooks/{hookId}/tests
     * @response `204` `void`
     * @response `403` `void`
     */
    hooksTestsCreate: (owner: string, repo: string, hookId: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/repos/${owner}/${repo}/hooks/${hookId}/tests`,
        method: "POST",
        ...params,
      }),

    /**
     * No description
     *
     * @name IssuesDetail
     * @request GET:/repos/{owner}/{repo}/issues
     * @response `200` `SwaggerTypeIssuesGeneratedDataContract`
     * @response `403` `void`
     */
    issuesDetail: (
      owner: string,
      repo: string,
      query: {
        /** @default "all" */
        filter: "assigned" | "created" | "mentioned" | "subscribed" | "all";
        /** @default "open" */
        state: "open" | "closed";
        labels: string;
        /** @default "created" */
        sort: "created" | "updated" | "comments";
        /** @default "desc" */
        direction: "asc" | "desc";
        since?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeIssuesGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/issues`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name IssuesCreate
     * @request POST:/repos/{owner}/{repo}/issues
     * @response `201` `SwaggerTypeIssueGeneratedDataContract`
     * @response `403` `void`
     */
    issuesCreate: (
      owner: string,
      repo: string,
      body: SwaggerTypeIssueGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeIssueGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/issues`,
        method: "POST",
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name IssuesCommentsDetail
     * @request GET:/repos/{owner}/{repo}/issues/comments
     * @response `200` `SwaggerTypeIssuesCommentsGeneratedDataContract`
     * @response `403` `void`
     */
    issuesCommentsDetail: (
      owner: string,
      repo: string,
      query?: {
        direction?: string;
        sort?: "created" | "updated";
        since?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeIssuesCommentsGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/issues/comments`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name IssuesCommentsDelete
     * @request DELETE:/repos/{owner}/{repo}/issues/comments/{commentId}
     * @response `204` `void`
     * @response `403` `void`
     */
    issuesCommentsDelete: (owner: string, repo: string, commentId: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/repos/${owner}/${repo}/issues/comments/${commentId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name IssuesCommentsDetail2
     * @request GET:/repos/{owner}/{repo}/issues/comments/{commentId}
     * @originalName issuesCommentsDetail
     * @duplicate
     * @response `200` `SwaggerTypeIssuesCommentGeneratedDataContract`
     * @response `403` `void`
     */
    issuesCommentsDetail2: (owner: string, repo: string, commentId: number, params: RequestParams = {}) =>
      this.request<SwaggerTypeIssuesCommentGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/issues/comments/${commentId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name IssuesCommentsPartialUpdate
     * @request PATCH:/repos/{owner}/{repo}/issues/comments/{commentId}
     * @response `200` `SwaggerTypeIssuesCommentGeneratedDataContract`
     * @response `403` `void`
     */
    issuesCommentsPartialUpdate: (
      owner: string,
      repo: string,
      commentId: number,
      body: SwaggerTypeCommentBodyGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeIssuesCommentGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/issues/comments/${commentId}`,
        method: "PATCH",
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name IssuesEventsDetail
     * @request GET:/repos/{owner}/{repo}/issues/events
     * @response `200` `SwaggerTypeIssueEventsGeneratedDataContract`
     * @response `403` `void`
     */
    issuesEventsDetail: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeIssueEventsGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/issues/events`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name IssuesEventsDetail2
     * @request GET:/repos/{owner}/{repo}/issues/events/{eventId}
     * @originalName issuesEventsDetail
     * @duplicate
     * @response `200` `SwaggerTypeIssueEventGeneratedDataContract`
     * @response `403` `void`
     */
    issuesEventsDetail2: (owner: string, repo: string, eventId: number, params: RequestParams = {}) =>
      this.request<SwaggerTypeIssueEventGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/issues/events/${eventId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name IssuesDetail2
     * @request GET:/repos/{owner}/{repo}/issues/{number}
     * @originalName issuesDetail
     * @duplicate
     * @response `200` `SwaggerTypeIssueGeneratedDataContract`
     * @response `403` `void`
     */
    issuesDetail2: (owner: string, repo: string, number: number, params: RequestParams = {}) =>
      this.request<SwaggerTypeIssueGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/issues/${number}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name IssuesPartialUpdate
     * @request PATCH:/repos/{owner}/{repo}/issues/{number}
     * @response `200` `SwaggerTypeIssueGeneratedDataContract`
     * @response `403` `void`
     */
    issuesPartialUpdate: (
      owner: string,
      repo: string,
      number: number,
      body: SwaggerTypeIssueGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeIssueGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/issues/${number}`,
        method: "PATCH",
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name IssuesCommentsDetail3
     * @request GET:/repos/{owner}/{repo}/issues/{number}/comments
     * @originalName issuesCommentsDetail
     * @duplicate
     * @response `200` `SwaggerTypeIssuesCommentsGeneratedDataContract`
     * @response `403` `void`
     */
    issuesCommentsDetail3: (owner: string, repo: string, number: number, params: RequestParams = {}) =>
      this.request<SwaggerTypeIssuesCommentsGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/issues/${number}/comments`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name IssuesCommentsCreate
     * @request POST:/repos/{owner}/{repo}/issues/{number}/comments
     * @response `201` `SwaggerTypeIssuesCommentGeneratedDataContract`
     * @response `403` `void`
     */
    issuesCommentsCreate: (
      owner: string,
      repo: string,
      number: number,
      body: SwaggerTypeCommentBodyGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeIssuesCommentGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/issues/${number}/comments`,
        method: "POST",
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name IssuesEventsDetail3
     * @request GET:/repos/{owner}/{repo}/issues/{number}/events
     * @originalName issuesEventsDetail
     * @duplicate
     * @response `200` `SwaggerTypeIssueEventsGeneratedDataContract`
     * @response `403` `void`
     */
    issuesEventsDetail3: (owner: string, repo: string, number: number, params: RequestParams = {}) =>
      this.request<SwaggerTypeIssueEventsGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/issues/${number}/events`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name IssuesLabelsDelete
     * @request DELETE:/repos/{owner}/{repo}/issues/{number}/labels
     * @response `204` `void`
     * @response `403` `void`
     */
    issuesLabelsDelete: (owner: string, repo: string, number: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/repos/${owner}/${repo}/issues/${number}/labels`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name IssuesLabelsDetail
     * @request GET:/repos/{owner}/{repo}/issues/{number}/labels
     * @response `200` `SwaggerTypeLabelsGeneratedDataContract`
     * @response `403` `void`
     */
    issuesLabelsDetail: (owner: string, repo: string, number: number, params: RequestParams = {}) =>
      this.request<SwaggerTypeLabelsGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/issues/${number}/labels`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name IssuesLabelsCreate
     * @request POST:/repos/{owner}/{repo}/issues/{number}/labels
     * @response `201` `SwaggerTypeLabelGeneratedDataContract`
     * @response `403` `void`
     */
    issuesLabelsCreate: (
      owner: string,
      repo: string,
      number: number,
      body: SwaggerTypeEmailsPostGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeLabelGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/issues/${number}/labels`,
        method: "POST",
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name IssuesLabelsUpdate
     * @request PUT:/repos/{owner}/{repo}/issues/{number}/labels
     * @response `201` `SwaggerTypeLabelGeneratedDataContract`
     * @response `403` `void`
     */
    issuesLabelsUpdate: (
      owner: string,
      repo: string,
      number: number,
      body: SwaggerTypeEmailsPostGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeLabelGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/issues/${number}/labels`,
        method: "PUT",
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name IssuesLabelsDelete2
     * @request DELETE:/repos/{owner}/{repo}/issues/{number}/labels/{name}
     * @originalName issuesLabelsDelete
     * @duplicate
     * @response `204` `void`
     * @response `403` `void`
     */
    issuesLabelsDelete2: (owner: string, repo: string, number: number, name: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/repos/${owner}/${repo}/issues/${number}/labels/${name}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name KeysDetail
     * @request GET:/repos/{owner}/{repo}/keys
     * @response `200` `SwaggerTypeKeysGeneratedDataContract`
     * @response `403` `void`
     */
    keysDetail: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeKeysGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/keys`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name KeysCreate
     * @request POST:/repos/{owner}/{repo}/keys
     * @response `201` `SwaggerTypeUserKeysKeyIdGeneratedDataContract`
     * @response `403` `void`
     */
    keysCreate: (
      owner: string,
      repo: string,
      body: SwaggerTypeUserKeysPostGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeUserKeysKeyIdGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/keys`,
        method: "POST",
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name KeysDelete
     * @request DELETE:/repos/{owner}/{repo}/keys/{keyId}
     * @response `204` `void`
     * @response `403` `void`
     */
    keysDelete: (owner: string, repo: string, keyId: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/repos/${owner}/${repo}/keys/${keyId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name KeysDetail2
     * @request GET:/repos/{owner}/{repo}/keys/{keyId}
     * @originalName keysDetail
     * @duplicate
     * @response `200` `SwaggerTypeUserKeysKeyIdGeneratedDataContract`
     * @response `403` `void`
     */
    keysDetail2: (owner: string, repo: string, keyId: number, params: RequestParams = {}) =>
      this.request<SwaggerTypeUserKeysKeyIdGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/keys/${keyId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name LabelsDetail
     * @request GET:/repos/{owner}/{repo}/labels
     * @response `200` `SwaggerTypeLabelsGeneratedDataContract`
     * @response `403` `void`
     */
    labelsDetail: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeLabelsGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/labels`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name LabelsCreate
     * @request POST:/repos/{owner}/{repo}/labels
     * @response `201` `SwaggerTypeLabelGeneratedDataContract`
     * @response `403` `void`
     */
    labelsCreate: (
      owner: string,
      repo: string,
      body: SwaggerTypeEmailsPostGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeLabelGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/labels`,
        method: "POST",
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name LabelsDelete
     * @request DELETE:/repos/{owner}/{repo}/labels/{name}
     * @response `204` `void`
     * @response `403` `void`
     */
    labelsDelete: (owner: string, repo: string, name: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/repos/${owner}/${repo}/labels/${name}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name LabelsDetail2
     * @request GET:/repos/{owner}/{repo}/labels/{name}
     * @originalName labelsDetail
     * @duplicate
     * @response `200` `SwaggerTypeLabelGeneratedDataContract`
     * @response `403` `void`
     */
    labelsDetail2: (owner: string, repo: string, name: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeLabelGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/labels/${name}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name LabelsPartialUpdate
     * @request PATCH:/repos/{owner}/{repo}/labels/{name}
     * @response `200` `SwaggerTypeLabelGeneratedDataContract`
     * @response `403` `void`
     */
    labelsPartialUpdate: (
      owner: string,
      repo: string,
      name: string,
      body: SwaggerTypeEmailsPostGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeLabelGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/labels/${name}`,
        method: "PATCH",
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name LanguagesDetail
     * @request GET:/repos/{owner}/{repo}/languages
     * @response `200` `SwaggerTypeLanguagesGeneratedDataContract`
     * @response `403` `void`
     */
    languagesDetail: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeLanguagesGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/languages`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name MergesCreate
     * @request POST:/repos/{owner}/{repo}/merges
     * @response `201` `SwaggerTypeMergesSuccessfulGeneratedDataContract`
     * @response `204` `void`
     * @response `403` `void`
     * @response `404` `SwaggerTypeMergesConflictGeneratedDataContract`
     * @response `409` `SwaggerTypeMergesConflictGeneratedDataContract`
     */
    mergesCreate: (
      owner: string,
      repo: string,
      body: SwaggerTypeMergesBodyGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<
        SwaggerTypeMergesSuccessfulGeneratedDataContract,
        void | SwaggerTypeMergesConflictGeneratedDataContract
      >({
        path: `/repos/${owner}/${repo}/merges`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name MilestonesDetail
     * @request GET:/repos/{owner}/{repo}/milestones
     * @response `200` `SwaggerTypeMilestoneGeneratedDataContract`
     * @response `403` `void`
     */
    milestonesDetail: (
      owner: string,
      repo: string,
      query?: {
        /** @default "open" */
        state?: "open" | "closed";
        direction?: string;
        /** @default "due_date" */
        sort?: "due_date" | "completeness";
      },
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeMilestoneGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/milestones`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name MilestonesCreate
     * @request POST:/repos/{owner}/{repo}/milestones
     * @response `201` `SwaggerTypeMilestoneGeneratedDataContract`
     * @response `403` `void`
     */
    milestonesCreate: (
      owner: string,
      repo: string,
      body: SwaggerTypeMilestoneUpdateGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeMilestoneGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/milestones`,
        method: "POST",
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name MilestonesDelete
     * @request DELETE:/repos/{owner}/{repo}/milestones/{number}
     * @response `204` `void`
     * @response `403` `void`
     */
    milestonesDelete: (owner: string, repo: string, number: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/repos/${owner}/${repo}/milestones/${number}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name MilestonesDetail2
     * @request GET:/repos/{owner}/{repo}/milestones/{number}
     * @originalName milestonesDetail
     * @duplicate
     * @response `200` `SwaggerTypeMilestoneGeneratedDataContract`
     * @response `403` `void`
     */
    milestonesDetail2: (owner: string, repo: string, number: number, params: RequestParams = {}) =>
      this.request<SwaggerTypeMilestoneGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/milestones/${number}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name MilestonesPartialUpdate
     * @request PATCH:/repos/{owner}/{repo}/milestones/{number}
     * @response `200` `SwaggerTypeMilestoneGeneratedDataContract`
     * @response `403` `void`
     */
    milestonesPartialUpdate: (
      owner: string,
      repo: string,
      number: number,
      body: SwaggerTypeMilestoneUpdateGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeMilestoneGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/milestones/${number}`,
        method: "PATCH",
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name MilestonesLabelsDetail
     * @request GET:/repos/{owner}/{repo}/milestones/{number}/labels
     * @response `200` `SwaggerTypeLabelsGeneratedDataContract`
     * @response `403` `void`
     */
    milestonesLabelsDetail: (owner: string, repo: string, number: number, params: RequestParams = {}) =>
      this.request<SwaggerTypeLabelsGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/milestones/${number}/labels`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name NotificationsDetail
     * @request GET:/repos/{owner}/{repo}/notifications
     * @response `200` `SwaggerTypeNotificationsGeneratedDataContract`
     * @response `403` `void`
     */
    notificationsDetail: (
      owner: string,
      repo: string,
      query?: {
        all?: boolean;
        participating?: boolean;
        since?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeNotificationsGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/notifications`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name NotificationsUpdate
     * @request PUT:/repos/{owner}/{repo}/notifications
     * @response `205` `void`
     * @response `403` `void`
     */
    notificationsUpdate: (
      owner: string,
      repo: string,
      body: SwaggerTypeNotificationMarkReadGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/repos/${owner}/${repo}/notifications`,
        method: "PUT",
        body: body,
        ...params,
      }),

    /**
     * No description
     *
     * @name PullsDetail
     * @request GET:/repos/{owner}/{repo}/pulls
     * @response `200` `SwaggerTypePullsGeneratedDataContract`
     * @response `403` `void`
     */
    pullsDetail: (
      owner: string,
      repo: string,
      query?: {
        /** @default "open" */
        state?: "open" | "closed";
        head?: string;
        base?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypePullsGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/pulls`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PullsCreate
     * @request POST:/repos/{owner}/{repo}/pulls
     * @response `201` `SwaggerTypePullsGeneratedDataContract`
     * @response `403` `void`
     */
    pullsCreate: (
      owner: string,
      repo: string,
      body: SwaggerTypePullsPostGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypePullsGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/pulls`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PullsCommentsDetail
     * @request GET:/repos/{owner}/{repo}/pulls/comments
     * @response `200` `SwaggerTypeIssuesCommentsGeneratedDataContract`
     * @response `403` `void`
     */
    pullsCommentsDetail: (
      owner: string,
      repo: string,
      query?: {
        direction?: string;
        sort?: "created" | "updated";
        since?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeIssuesCommentsGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/pulls/comments`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PullsCommentsDelete
     * @request DELETE:/repos/{owner}/{repo}/pulls/comments/{commentId}
     * @response `204` `void`
     * @response `403` `void`
     */
    pullsCommentsDelete: (owner: string, repo: string, commentId: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/repos/${owner}/${repo}/pulls/comments/${commentId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name PullsCommentsDetail2
     * @request GET:/repos/{owner}/{repo}/pulls/comments/{commentId}
     * @originalName pullsCommentsDetail
     * @duplicate
     * @response `200` `SwaggerTypePullsCommentGeneratedDataContract`
     * @response `403` `void`
     */
    pullsCommentsDetail2: (owner: string, repo: string, commentId: number, params: RequestParams = {}) =>
      this.request<SwaggerTypePullsCommentGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/pulls/comments/${commentId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PullsCommentsPartialUpdate
     * @request PATCH:/repos/{owner}/{repo}/pulls/comments/{commentId}
     * @response `200` `SwaggerTypePullsCommentGeneratedDataContract`
     * @response `403` `void`
     */
    pullsCommentsPartialUpdate: (
      owner: string,
      repo: string,
      commentId: number,
      body: SwaggerTypeCommentBodyGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypePullsCommentGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/pulls/comments/${commentId}`,
        method: "PATCH",
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PullsDetail2
     * @request GET:/repos/{owner}/{repo}/pulls/{number}
     * @originalName pullsDetail
     * @duplicate
     * @response `200` `SwaggerTypePullRequestGeneratedDataContract`
     * @response `403` `void`
     */
    pullsDetail2: (owner: string, repo: string, number: number, params: RequestParams = {}) =>
      this.request<SwaggerTypePullRequestGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/pulls/${number}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PullsPartialUpdate
     * @request PATCH:/repos/{owner}/{repo}/pulls/{number}
     * @response `200` `SwaggerTypeRepoGeneratedDataContract`
     * @response `403` `void`
     */
    pullsPartialUpdate: (
      owner: string,
      repo: string,
      number: number,
      body: SwaggerTypePullUpdateGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeRepoGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/pulls/${number}`,
        method: "PATCH",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PullsCommentsDetail3
     * @request GET:/repos/{owner}/{repo}/pulls/{number}/comments
     * @originalName pullsCommentsDetail
     * @duplicate
     * @response `200` `SwaggerTypePullsCommentGeneratedDataContract`
     * @response `403` `void`
     */
    pullsCommentsDetail3: (owner: string, repo: string, number: number, params: RequestParams = {}) =>
      this.request<SwaggerTypePullsCommentGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/pulls/${number}/comments`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PullsCommentsCreate
     * @request POST:/repos/{owner}/{repo}/pulls/{number}/comments
     * @response `201` `SwaggerTypePullsCommentGeneratedDataContract`
     * @response `403` `void`
     */
    pullsCommentsCreate: (
      owner: string,
      repo: string,
      number: number,
      body: SwaggerTypePullsCommentPostGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypePullsCommentGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/pulls/${number}/comments`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PullsCommitsDetail
     * @request GET:/repos/{owner}/{repo}/pulls/{number}/commits
     * @response `200` `SwaggerTypeCommitsGeneratedDataContract`
     * @response `403` `void`
     */
    pullsCommitsDetail: (owner: string, repo: string, number: number, params: RequestParams = {}) =>
      this.request<SwaggerTypeCommitsGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/pulls/${number}/commits`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PullsFilesDetail
     * @request GET:/repos/{owner}/{repo}/pulls/{number}/files
     * @response `200` `SwaggerTypePullsGeneratedDataContract`
     * @response `403` `void`
     */
    pullsFilesDetail: (owner: string, repo: string, number: number, params: RequestParams = {}) =>
      this.request<SwaggerTypePullsGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/pulls/${number}/files`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name PullsMergeDetail
     * @request GET:/repos/{owner}/{repo}/pulls/{number}/merge
     * @response `204` `void`
     * @response `403` `void`
     * @response `404` `void`
     */
    pullsMergeDetail: (owner: string, repo: string, number: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/repos/${owner}/${repo}/pulls/${number}/merge`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name PullsMergeUpdate
     * @request PUT:/repos/{owner}/{repo}/pulls/{number}/merge
     * @response `200` `SwaggerTypeMergeGeneratedDataContract`
     * @response `403` `void`
     * @response `405` `SwaggerTypeMergeGeneratedDataContract`
     */
    pullsMergeUpdate: (
      owner: string,
      repo: string,
      number: number,
      body: SwaggerTypeMergePullBodyGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeMergeGeneratedDataContract, void | SwaggerTypeMergeGeneratedDataContract>({
        path: `/repos/${owner}/${repo}/pulls/${number}/merge`,
        method: "PUT",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReadmeDetail
     * @request GET:/repos/{owner}/{repo}/readme
     * @response `200` `SwaggerTypeContentsPathGeneratedDataContract`
     * @response `403` `void`
     */
    readmeDetail: (
      owner: string,
      repo: string,
      query?: {
        ref?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeContentsPathGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/readme`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReleasesDetail
     * @request GET:/repos/{owner}/{repo}/releases
     * @response `200` `SwaggerTypeReleasesGeneratedDataContract`
     * @response `403` `void`
     */
    releasesDetail: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeReleasesGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/releases`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReleasesCreate
     * @request POST:/repos/{owner}/{repo}/releases
     * @response `201` `SwaggerTypeReleaseGeneratedDataContract`
     * @response `403` `void`
     */
    releasesCreate: (
      owner: string,
      repo: string,
      body: SwaggerTypeReleaseCreateGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeReleaseGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/releases`,
        method: "POST",
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReleasesAssetsDelete
     * @request DELETE:/repos/{owner}/{repo}/releases/assets/{id}
     * @response `204` `void`
     * @response `403` `void`
     */
    releasesAssetsDelete: (owner: string, repo: string, id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/repos/${owner}/${repo}/releases/assets/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReleasesAssetsDetail
     * @request GET:/repos/{owner}/{repo}/releases/assets/{id}
     * @response `200` `SwaggerTypeAssetGeneratedDataContract`
     * @response `403` `void`
     */
    releasesAssetsDetail: (owner: string, repo: string, id: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeAssetGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/releases/assets/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReleasesAssetsPartialUpdate
     * @request PATCH:/repos/{owner}/{repo}/releases/assets/{id}
     * @response `200` `SwaggerTypeAssetGeneratedDataContract`
     * @response `403` `void`
     */
    releasesAssetsPartialUpdate: (
      owner: string,
      repo: string,
      id: string,
      body: SwaggerTypeAssetPatchGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeAssetGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/releases/assets/${id}`,
        method: "PATCH",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReleasesDelete
     * @request DELETE:/repos/{owner}/{repo}/releases/{id}
     * @response `204` `void`
     * @response `403` `void`
     */
    releasesDelete: (owner: string, repo: string, id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/repos/${owner}/${repo}/releases/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReleasesDetail2
     * @request GET:/repos/{owner}/{repo}/releases/{id}
     * @originalName releasesDetail
     * @duplicate
     * @response `200` `SwaggerTypeReleaseGeneratedDataContract`
     * @response `403` `void`
     */
    releasesDetail2: (owner: string, repo: string, id: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeReleaseGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/releases/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReleasesPartialUpdate
     * @request PATCH:/repos/{owner}/{repo}/releases/{id}
     * @response `200` `SwaggerTypeReleaseGeneratedDataContract`
     * @response `403` `void`
     */
    releasesPartialUpdate: (
      owner: string,
      repo: string,
      id: string,
      body: SwaggerTypeReleaseCreateGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeReleaseGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/releases/${id}`,
        method: "PATCH",
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReleasesAssetsDetail2
     * @request GET:/repos/{owner}/{repo}/releases/{id}/assets
     * @originalName releasesAssetsDetail
     * @duplicate
     * @response `200` `SwaggerTypeAssetsGeneratedDataContract`
     * @response `403` `void`
     */
    releasesAssetsDetail2: (owner: string, repo: string, id: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeAssetsGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/releases/${id}/assets`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name StargazersDetail
     * @request GET:/repos/{owner}/{repo}/stargazers
     * @response `200` `SwaggerTypeUsersGeneratedDataContract`
     * @response `403` `void`
     */
    stargazersDetail: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeUsersGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/stargazers`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name StatsCodeFrequencyDetail
     * @request GET:/repos/{owner}/{repo}/stats/code_frequency
     * @response `200` `SwaggerTypeCodeFrequencyStatsGeneratedDataContract`
     * @response `403` `void`
     */
    statsCodeFrequencyDetail: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeCodeFrequencyStatsGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/stats/code_frequency`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name StatsCommitActivityDetail
     * @request GET:/repos/{owner}/{repo}/stats/commit_activity
     * @response `200` `SwaggerTypeCommitActivityStatsGeneratedDataContract`
     * @response `403` `void`
     */
    statsCommitActivityDetail: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeCommitActivityStatsGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/stats/commit_activity`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name StatsContributorsDetail
     * @request GET:/repos/{owner}/{repo}/stats/contributors
     * @response `200` `SwaggerTypeContributorsStatsGeneratedDataContract`
     * @response `403` `void`
     */
    statsContributorsDetail: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeContributorsStatsGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/stats/contributors`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name StatsParticipationDetail
     * @request GET:/repos/{owner}/{repo}/stats/participation
     * @response `200` `SwaggerTypeParticipationStatsGeneratedDataContract`
     * @response `403` `void`
     */
    statsParticipationDetail: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeParticipationStatsGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/stats/participation`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name StatsPunchCardDetail
     * @request GET:/repos/{owner}/{repo}/stats/punch_card
     * @response `200` `SwaggerTypeCodeFrequencyStatsGeneratedDataContract`
     * @response `403` `void`
     */
    statsPunchCardDetail: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeCodeFrequencyStatsGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/stats/punch_card`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name StatusesDetail
     * @request GET:/repos/{owner}/{repo}/statuses/{ref}
     * @response `200` `SwaggerTypeRefGeneratedDataContract`
     * @response `403` `void`
     */
    statusesDetail: (owner: string, repo: string, ref: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeRefGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/statuses/${ref}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name StatusesCreate
     * @request POST:/repos/{owner}/{repo}/statuses/{ref}
     * @response `201` `SwaggerTypeRefGeneratedDataContract`
     * @response `403` `void`
     */
    statusesCreate: (
      owner: string,
      repo: string,
      ref: string,
      body: SwaggerTypeHeadBranchGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeRefGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/statuses/${ref}`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name SubscribersDetail
     * @request GET:/repos/{owner}/{repo}/subscribers
     * @response `200` `SwaggerTypeUsersGeneratedDataContract`
     * @response `403` `void`
     */
    subscribersDetail: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeUsersGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/subscribers`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name SubscriptionDelete
     * @request DELETE:/repos/{owner}/{repo}/subscription
     * @response `204` `void`
     * @response `403` `void`
     */
    subscriptionDelete: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/repos/${owner}/${repo}/subscription`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name SubscriptionDetail
     * @request GET:/repos/{owner}/{repo}/subscription
     * @response `200` `SwaggerTypeSubscriptionGeneratedDataContract`
     * @response `403` `void`
     */
    subscriptionDetail: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeSubscriptionGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/subscription`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name SubscriptionUpdate
     * @request PUT:/repos/{owner}/{repo}/subscription
     * @response `200` `SwaggerTypeSubscriptionGeneratedDataContract`
     * @response `403` `void`
     */
    subscriptionUpdate: (
      owner: string,
      repo: string,
      body: SwaggerTypeSubscriptionBodyGeneratedDataContract,
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeSubscriptionGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/subscription`,
        method: "PUT",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name TagsDetail
     * @request GET:/repos/{owner}/{repo}/tags
     * @response `200` `SwaggerTypeTagsGeneratedDataContract`
     * @response `403` `void`
     */
    tagsDetail: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeTagsGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/tags`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name TeamsDetail
     * @request GET:/repos/{owner}/{repo}/teams
     * @response `200` `SwaggerTypeTeamsGeneratedDataContract`
     * @response `403` `void`
     */
    teamsDetail: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeTeamsGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/teams`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name WatchersDetail
     * @request GET:/repos/{owner}/{repo}/watchers
     * @response `200` `SwaggerTypeUsersGeneratedDataContract`
     * @response `403` `void`
     */
    watchersDetail: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeUsersGeneratedDataContract, void>({
        path: `/repos/${owner}/${repo}/watchers`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReposDetail2
     * @request GET:/repos/{owner}/{repo}/{archive_format}/{path}
     * @originalName reposDetail
     * @duplicate
     * @response `302` `void`
     * @response `403` `void`
     */
    reposDetail2: (
      owner: string,
      repo: string,
      archiveFormat: "tarball" | "zipball",
      path: string,
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/repos/${owner}/${repo}/${archiveFormat}/${path}`,
        method: "GET",
        ...params,
      }),
  };
  repositories = {
    /**
     * No description
     *
     * @name RepositoriesList
     * @request GET:/repositories
     * @response `200` `SwaggerTypeReposGeneratedDataContract`
     * @response `403` `void`
     */
    repositoriesList: (
      query?: {
        since?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeReposGeneratedDataContract, void>({
        path: `/repositories`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  search = {
    /**
     * No description
     *
     * @name CodeList
     * @request GET:/search/code
     * @response `200` `SwaggerTypeSearchCodeGeneratedDataContract`
     * @response `403` `void`
     */
    codeList: (
      query: {
        /** @default "desc" */
        order?: "desc" | "asc";
        q: string;
        sort?: "indexed";
      },
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeSearchCodeGeneratedDataContract, void>({
        path: `/search/code`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name IssuesList
     * @request GET:/search/issues
     * @response `200` `SwaggerTypeSearchIssuesGeneratedDataContract`
     * @response `403` `void`
     */
    issuesList: (
      query: {
        /** @default "desc" */
        order?: "desc" | "asc";
        q: string;
        sort?: "updated" | "created" | "comments";
      },
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeSearchIssuesGeneratedDataContract, void>({
        path: `/search/issues`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name RepositoriesList
     * @request GET:/search/repositories
     * @response `200` `SwaggerTypeSearchRepositoriesGeneratedDataContract`
     * @response `403` `void`
     */
    repositoriesList: (
      query: {
        /** @default "desc" */
        order?: "desc" | "asc";
        q: string;
        sort?: "stars" | "forks" | "updated";
      },
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeSearchRepositoriesGeneratedDataContract, void>({
        path: `/search/repositories`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UsersList
     * @request GET:/search/users
     * @response `200` `SwaggerTypeSearchUsersGeneratedDataContract`
     * @response `403` `void`
     */
    usersList: (
      query: {
        /** @default "desc" */
        order?: "desc" | "asc";
        q: string;
        sort?: "followers" | "repositories" | "joined";
      },
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeSearchUsersGeneratedDataContract, void>({
        path: `/search/users`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  teams = {
    /**
     * No description
     *
     * @name TeamsDelete
     * @request DELETE:/teams/{teamId}
     * @response `204` `void`
     * @response `403` `void`
     */
    teamsDelete: (teamId: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/teams/${teamId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name TeamsDetail
     * @request GET:/teams/{teamId}
     * @response `200` `SwaggerTypeTeamGeneratedDataContract`
     * @response `403` `void`
     */
    teamsDetail: (teamId: number, params: RequestParams = {}) =>
      this.request<SwaggerTypeTeamGeneratedDataContract, void>({
        path: `/teams/${teamId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name TeamsPartialUpdate
     * @request PATCH:/teams/{teamId}
     * @response `200` `SwaggerTypeTeamGeneratedDataContract`
     * @response `403` `void`
     */
    teamsPartialUpdate: (teamId: number, body: SwaggerTypeEditTeamGeneratedDataContract, params: RequestParams = {}) =>
      this.request<SwaggerTypeTeamGeneratedDataContract, void>({
        path: `/teams/${teamId}`,
        method: "PATCH",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name MembersDetail
     * @request GET:/teams/{teamId}/members
     * @response `200` `SwaggerTypeUsersGeneratedDataContract`
     * @response `403` `void`
     */
    membersDetail: (teamId: number, params: RequestParams = {}) =>
      this.request<SwaggerTypeUsersGeneratedDataContract, void>({
        path: `/teams/${teamId}/members`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name MembersDelete
     * @request DELETE:/teams/{teamId}/members/{username}
     * @deprecated
     * @response `204` `void`
     * @response `403` `void`
     */
    membersDelete: (teamId: number, username: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/teams/${teamId}/members/${username}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name MembersDetail2
     * @request GET:/teams/{teamId}/members/{username}
     * @deprecated
     * @originalName membersDetail
     * @duplicate
     * @response `204` `void`
     * @response `403` `void`
     * @response `404` `void`
     */
    membersDetail2: (teamId: number, username: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/teams/${teamId}/members/${username}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name MembersUpdate
     * @request PUT:/teams/{teamId}/members/{username}
     * @deprecated
     * @response `204` `void`
     * @response `403` `void`
     * @response `422` `SwaggerTypeOrganizationAsTeamMemberGeneratedDataContract`
     */
    membersUpdate: (teamId: number, username: string, params: RequestParams = {}) =>
      this.request<void, void | SwaggerTypeOrganizationAsTeamMemberGeneratedDataContract>({
        path: `/teams/${teamId}/members/${username}`,
        method: "PUT",
        ...params,
      }),

    /**
     * No description
     *
     * @name MembershipsDelete
     * @request DELETE:/teams/{teamId}/memberships/{username}
     * @response `204` `void`
     * @response `403` `void`
     */
    membershipsDelete: (teamId: number, username: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/teams/${teamId}/memberships/${username}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name MembershipsDetail
     * @request GET:/teams/{teamId}/memberships/{username}
     * @response `200` `SwaggerTypeTeamMembershipGeneratedDataContract`
     * @response `403` `void`
     * @response `404` `void`
     */
    membershipsDetail: (teamId: number, username: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeTeamMembershipGeneratedDataContract, void>({
        path: `/teams/${teamId}/memberships/${username}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name MembershipsUpdate
     * @request PUT:/teams/{teamId}/memberships/{username}
     * @response `200` `SwaggerTypeTeamMembershipGeneratedDataContract`
     * @response `403` `void`
     * @response `422` `SwaggerTypeOrganizationAsTeamMemberGeneratedDataContract`
     */
    membershipsUpdate: (teamId: number, username: string, params: RequestParams = {}) =>
      this.request<
        SwaggerTypeTeamMembershipGeneratedDataContract,
        void | SwaggerTypeOrganizationAsTeamMemberGeneratedDataContract
      >({
        path: `/teams/${teamId}/memberships/${username}`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReposDetail
     * @request GET:/teams/{teamId}/repos
     * @response `200` `SwaggerTypeTeamReposGeneratedDataContract`
     * @response `403` `void`
     */
    reposDetail: (teamId: number, params: RequestParams = {}) =>
      this.request<SwaggerTypeTeamReposGeneratedDataContract, void>({
        path: `/teams/${teamId}/repos`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReposDelete
     * @request DELETE:/teams/{teamId}/repos/{owner}/{repo}
     * @response `204` `void`
     * @response `403` `void`
     */
    reposDelete: (teamId: number, owner: string, repo: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/teams/${teamId}/repos/${owner}/${repo}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReposDetail2
     * @request GET:/teams/{teamId}/repos/{owner}/{repo}
     * @originalName reposDetail
     * @duplicate
     * @response `403` `void`
     */
    reposDetail2: (teamId: number, owner: string, repo: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/teams/${teamId}/repos/${owner}/${repo}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReposUpdate
     * @request PUT:/teams/{teamId}/repos/{owner}/{repo}
     * @response `403` `void`
     */
    reposUpdate: (teamId: number, owner: string, repo: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/teams/${teamId}/repos/${owner}/${repo}`,
        method: "PUT",
        ...params,
      }),
  };
  user = {
    /**
     * No description
     *
     * @name UserList
     * @request GET:/user
     * @response `200` `SwaggerTypeUserGeneratedDataContract`
     * @response `403` `void`
     */
    userList: (params: RequestParams = {}) =>
      this.request<SwaggerTypeUserGeneratedDataContract, void>({
        path: `/user`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UserPartialUpdate
     * @request PATCH:/user
     * @response `200` `SwaggerTypeUserGeneratedDataContract`
     * @response `403` `void`
     */
    userPartialUpdate: (body: SwaggerTypeUserUpdateGeneratedDataContract, params: RequestParams = {}) =>
      this.request<SwaggerTypeUserGeneratedDataContract, void>({
        path: `/user`,
        method: "PATCH",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name EmailsDelete
     * @request DELETE:/user/emails
     * @response `204` `void`
     * @response `403` `void`
     */
    emailsDelete: (body: SwaggerTypeUserEmailsGeneratedDataContract, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/user/emails`,
        method: "DELETE",
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name EmailsList
     * @request GET:/user/emails
     * @response `200` `SwaggerTypeUserEmailsGeneratedDataContract`
     * @response `403` `void`
     */
    emailsList: (params: RequestParams = {}) =>
      this.request<SwaggerTypeUserEmailsGeneratedDataContract, void>({
        path: `/user/emails`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name EmailsCreate
     * @request POST:/user/emails
     * @response `403` `void`
     */
    emailsCreate: (body: SwaggerTypeEmailsPostGeneratedDataContract, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/user/emails`,
        method: "POST",
        body: body,
        ...params,
      }),

    /**
     * No description
     *
     * @name FollowersList
     * @request GET:/user/followers
     * @response `200` `SwaggerTypeUsersGeneratedDataContract`
     * @response `403` `void`
     */
    followersList: (params: RequestParams = {}) =>
      this.request<SwaggerTypeUsersGeneratedDataContract, void>({
        path: `/user/followers`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name FollowingList
     * @request GET:/user/following
     * @response `200` `SwaggerTypeUsersGeneratedDataContract`
     * @response `403` `void`
     */
    followingList: (params: RequestParams = {}) =>
      this.request<SwaggerTypeUsersGeneratedDataContract, void>({
        path: `/user/following`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name FollowingDelete
     * @request DELETE:/user/following/{username}
     * @response `204` `void`
     * @response `403` `void`
     */
    followingDelete: (username: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/user/following/${username}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name FollowingDetail
     * @request GET:/user/following/{username}
     * @response `204` `void`
     * @response `403` `void`
     * @response `404` `void`
     */
    followingDetail: (username: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/user/following/${username}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name FollowingUpdate
     * @request PUT:/user/following/{username}
     * @response `204` `void`
     * @response `403` `void`
     */
    followingUpdate: (username: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/user/following/${username}`,
        method: "PUT",
        ...params,
      }),

    /**
     * No description
     *
     * @name IssuesList
     * @request GET:/user/issues
     * @response `200` `SwaggerTypeIssuesGeneratedDataContract`
     * @response `403` `void`
     */
    issuesList: (
      query: {
        /** @default "all" */
        filter: "assigned" | "created" | "mentioned" | "subscribed" | "all";
        /** @default "open" */
        state: "open" | "closed";
        labels: string;
        /** @default "created" */
        sort: "created" | "updated" | "comments";
        /** @default "desc" */
        direction: "asc" | "desc";
        since?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeIssuesGeneratedDataContract, void>({
        path: `/user/issues`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name KeysList
     * @request GET:/user/keys
     * @response `200` `SwaggerTypeGitignoreGeneratedDataContract`
     * @response `403` `void`
     */
    keysList: (params: RequestParams = {}) =>
      this.request<SwaggerTypeGitignoreGeneratedDataContract, void>({
        path: `/user/keys`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name KeysCreate
     * @request POST:/user/keys
     * @response `201` `SwaggerTypeUserKeysKeyIdGeneratedDataContract`
     * @response `403` `void`
     */
    keysCreate: (body: SwaggerTypeUserKeysPostGeneratedDataContract, params: RequestParams = {}) =>
      this.request<SwaggerTypeUserKeysKeyIdGeneratedDataContract, void>({
        path: `/user/keys`,
        method: "POST",
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name KeysDelete
     * @request DELETE:/user/keys/{keyId}
     * @response `204` `void`
     * @response `403` `void`
     */
    keysDelete: (keyId: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/user/keys/${keyId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name KeysDetail
     * @request GET:/user/keys/{keyId}
     * @response `200` `SwaggerTypeUserKeysKeyIdGeneratedDataContract`
     * @response `403` `void`
     */
    keysDetail: (keyId: number, params: RequestParams = {}) =>
      this.request<SwaggerTypeUserKeysKeyIdGeneratedDataContract, void>({
        path: `/user/keys/${keyId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OrgsList
     * @request GET:/user/orgs
     * @response `200` `SwaggerTypeGitignoreGeneratedDataContract`
     * @response `403` `void`
     */
    orgsList: (params: RequestParams = {}) =>
      this.request<SwaggerTypeGitignoreGeneratedDataContract, void>({
        path: `/user/orgs`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReposList
     * @request GET:/user/repos
     * @response `200` `SwaggerTypeReposGeneratedDataContract`
     * @response `403` `void`
     */
    reposList: (
      query?: {
        /** @default "all" */
        type?: "all" | "public" | "private" | "forks" | "sources" | "member";
      },
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeReposGeneratedDataContract, void>({
        path: `/user/repos`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReposCreate
     * @request POST:/user/repos
     * @response `201` `SwaggerTypeReposGeneratedDataContract`
     * @response `403` `void`
     */
    reposCreate: (body: SwaggerTypePostRepoGeneratedDataContract, params: RequestParams = {}) =>
      this.request<SwaggerTypeReposGeneratedDataContract, void>({
        path: `/user/repos`,
        method: "POST",
        body: body,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name StarredList
     * @request GET:/user/starred
     * @response `200` `SwaggerTypeGitignoreGeneratedDataContract`
     * @response `403` `void`
     */
    starredList: (
      query?: {
        direction?: string;
        /** @default "created" */
        sort?: "created" | "updated";
      },
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeGitignoreGeneratedDataContract, void>({
        path: `/user/starred`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name StarredDelete
     * @request DELETE:/user/starred/{owner}/{repo}
     * @response `204` `void`
     * @response `403` `void`
     */
    starredDelete: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/user/starred/${owner}/${repo}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name StarredDetail
     * @request GET:/user/starred/{owner}/{repo}
     * @response `204` `void`
     * @response `403` `void`
     * @response `404` `void`
     */
    starredDetail: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/user/starred/${owner}/${repo}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name StarredUpdate
     * @request PUT:/user/starred/{owner}/{repo}
     * @response `204` `void`
     * @response `403` `void`
     */
    starredUpdate: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/user/starred/${owner}/${repo}`,
        method: "PUT",
        ...params,
      }),

    /**
     * No description
     *
     * @name SubscriptionsList
     * @request GET:/user/subscriptions
     * @response `200` `SwaggerTypeReposGeneratedDataContract`
     * @response `403` `void`
     */
    subscriptionsList: (params: RequestParams = {}) =>
      this.request<SwaggerTypeReposGeneratedDataContract, void>({
        path: `/user/subscriptions`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name SubscriptionsDelete
     * @request DELETE:/user/subscriptions/{owner}/{repo}
     * @deprecated
     * @response `204` `void`
     * @response `403` `void`
     */
    subscriptionsDelete: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/user/subscriptions/${owner}/${repo}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @name SubscriptionsDetail
     * @request GET:/user/subscriptions/{owner}/{repo}
     * @deprecated
     * @response `204` `void`
     * @response `403` `void`
     * @response `404` `void`
     */
    subscriptionsDetail: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/user/subscriptions/${owner}/${repo}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name SubscriptionsUpdate
     * @request PUT:/user/subscriptions/{owner}/{repo}
     * @deprecated
     * @response `204` `void`
     * @response `403` `void`
     */
    subscriptionsUpdate: (owner: string, repo: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/user/subscriptions/${owner}/${repo}`,
        method: "PUT",
        ...params,
      }),

    /**
     * No description
     *
     * @name TeamsList
     * @request GET:/user/teams
     * @response `200` `SwaggerTypeTeamsListGeneratedDataContract`
     * @response `403` `void`
     */
    teamsList: (params: RequestParams = {}) =>
      this.request<SwaggerTypeTeamsListGeneratedDataContract, void>({
        path: `/user/teams`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @name UsersList
     * @request GET:/users
     * @response `200` `SwaggerTypeUsersGeneratedDataContract`
     * @response `403` `void`
     */
    usersList: (
      query?: {
        since?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeUsersGeneratedDataContract, void>({
        path: `/users`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UsersDetail
     * @request GET:/users/{username}
     * @response `200` `SwaggerTypeUserGeneratedDataContract`
     * @response `403` `void`
     */
    usersDetail: (username: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeUserGeneratedDataContract, void>({
        path: `/users/${username}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name EventsDetail
     * @request GET:/users/{username}/events
     * @response `403` `void`
     */
    eventsDetail: (username: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/users/${username}/events`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name EventsOrgsDetail
     * @request GET:/users/{username}/events/orgs/{org}
     * @response `403` `void`
     */
    eventsOrgsDetail: (username: string, org: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/users/${username}/events/orgs/${org}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name FollowersDetail
     * @request GET:/users/{username}/followers
     * @response `200` `SwaggerTypeUsersGeneratedDataContract`
     * @response `403` `void`
     */
    followersDetail: (username: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeUsersGeneratedDataContract, void>({
        path: `/users/${username}/followers`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name FollowingDetail
     * @request GET:/users/{username}/following/{targetUser}
     * @response `204` `void`
     * @response `403` `void`
     * @response `404` `void`
     */
    followingDetail: (username: string, targetUser: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/users/${username}/following/${targetUser}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name GistsDetail
     * @request GET:/users/{username}/gists
     * @response `200` `SwaggerTypeGistsGeneratedDataContract`
     * @response `403` `void`
     */
    gistsDetail: (
      username: string,
      query?: {
        since?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeGistsGeneratedDataContract, void>({
        path: `/users/${username}/gists`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name KeysDetail
     * @request GET:/users/{username}/keys
     * @response `200` `SwaggerTypeGitignoreGeneratedDataContract`
     * @response `403` `void`
     */
    keysDetail: (username: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeGitignoreGeneratedDataContract, void>({
        path: `/users/${username}/keys`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name OrgsDetail
     * @request GET:/users/{username}/orgs
     * @response `200` `SwaggerTypeGitignoreGeneratedDataContract`
     * @response `403` `void`
     */
    orgsDetail: (username: string, params: RequestParams = {}) =>
      this.request<SwaggerTypeGitignoreGeneratedDataContract, void>({
        path: `/users/${username}/orgs`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReceivedEventsDetail
     * @request GET:/users/{username}/received_events
     * @response `403` `void`
     */
    receivedEventsDetail: (username: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/users/${username}/received_events`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReceivedEventsPublicDetail
     * @request GET:/users/{username}/received_events/public
     * @response `403` `void`
     */
    receivedEventsPublicDetail: (username: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/users/${username}/received_events/public`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReposDetail
     * @request GET:/users/{username}/repos
     * @response `200` `SwaggerTypeReposGeneratedDataContract`
     * @response `403` `void`
     */
    reposDetail: (
      username: string,
      query?: {
        /** @default "all" */
        type?: "all" | "public" | "private" | "forks" | "sources" | "member";
      },
      params: RequestParams = {},
    ) =>
      this.request<SwaggerTypeReposGeneratedDataContract, void>({
        path: `/users/${username}/repos`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name StarredDetail
     * @request GET:/users/{username}/starred
     * @response `403` `void`
     */
    starredDetail: (username: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/users/${username}/starred`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name SubscriptionsDetail
     * @request GET:/users/{username}/subscriptions
     * @response `403` `void`
     */
    subscriptionsDetail: (username: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/users/${username}/subscriptions`,
        method: "GET",
        ...params,
      }),
  };
}
