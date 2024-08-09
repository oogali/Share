const GITHUB_BASE_URL = process.env.GITHUB_BASE_URL

export const MOCK_COMMENTS = {
  data: [
    {
      url: `${GITHUB_BASE_URL}/repos/org/repo/issues/comments/1144935479`,
      html_url: 'https://github.com/org/repo/issues/17#issuecomment-1144935479',
      issue_url: `${GITHUB_BASE_URL}/repos/org/repo/issues/17`,
      id: 1144935480,
      node_id: 'IC_kwDOFwgxOc5EPlQ3',
      number: 1,
      user: {
        login: 'user1',
        id: 1234567,
        node_id: 'MDQ6VXNlcjEyMzQ1Njc=',
        gravatar_id: '',
        url: `${GITHUB_BASE_URL}/users/user1`,
        html_url: 'https://github.com/user1',
        followers_url: `${GITHUB_BASE_URL}/users/user1/followers`,
        following_url: `${GITHUB_BASE_URL}/users/user1/following{/other_user}`,
        gists_url: `${GITHUB_BASE_URL}/users/user1/gists{/gist_id}`,
        starred_url: `${GITHUB_BASE_URL}/users/user1/starred{/owner}{/repo}`,
        subscriptions_url: `${GITHUB_BASE_URL}/users/user1/subscriptions`,
        organizations_url: `${GITHUB_BASE_URL}/users/user1/orgs`,
        repos_url: `${GITHUB_BASE_URL}/users/user1/repos`,
        events_url: `${GITHUB_BASE_URL}/users/user1/events{/privacy}`,
        received_events_url: `${GITHUB_BASE_URL}/users/user1/received_events`,
        type: 'User',
        site_admin: false,
      },
      created_at: '2022-06-02T14:31:04Z',
      updated_at: '2022-06-08T08:18:43Z',
      author_association: 'NONE',
      body: `testComment_1`,
      reactions: {
        'url': `${GITHUB_BASE_URL}/repos/org/repo/issues/comments/1144935479/reactions`,
        'total_count': 0,
        '+1': 0,
        '-1': 0,
        'laugh': 0,
        'hooray': 0,
        'confused': 0,
        'heart': 0,
        'rocket': 0,
        'eyes': 0,
      },
      performed_via_github_app: null,
    },
    {
      url: `${GITHUB_BASE_URL}/repos/org/repo/issues/comments/1144935481`,
      html_url: 'https://github.com/org/repo/issues/17#issuecomment-1144935481',
      issue_url: `${GITHUB_BASE_URL}/repos/org/repo/issues/17`,
      id: 1144935481,
      node_id: 'IC_kwDOFwgxOc5EPlQ4',
      number: 2,
      user: {
        login: 'user2',
        id: 1234568,
        node_id: 'MDQ6VXNlcjEyMzQ1Njg=',
        gravatar_id: '',
        url: `${GITHUB_BASE_URL}/users/user2`,
        html_url: 'https://github.com/user2',
        followers_url: `${GITHUB_BASE_URL}/users/user2/followers`,
        following_url: `${GITHUB_BASE_URL}/users/user2/following{/other_user}`,
        gists_url: `${GITHUB_BASE_URL}/users/user2/gists{/gist_id}`,
        starred_url: `${GITHUB_BASE_URL}/users/user2/starred{/owner}{/repo}`,
        subscriptions_url: `${GITHUB_BASE_URL}/users/user2/subscriptions`,
        organizations_url: `${GITHUB_BASE_URL}/users/user2/orgs`,
        repos_url: `${GITHUB_BASE_URL}/users/user2/repos`,
        events_url: `${GITHUB_BASE_URL}/users/user2/events{/privacy}`,
        received_events_url: `${GITHUB_BASE_URL}/users/user2/received_events`,
        type: 'User',
        site_admin: false,
      },
      created_at: '2022-06-02T14:31:04Z',
      updated_at: '2022-06-08T08:18:43Z',
      author_association: 'NONE',
      body: `testComment_2`,
      reactions: {
        'url': `${GITHUB_BASE_URL}/repos/org/repo/issues/comments/1144935481/reactions`,
        'total_count': 0,
        '+1': 0,
        '-1': 0,
        'laugh': 0,
        'hooray': 0,
        'confused': 0,
        'heart': 0,
        'rocket': 0,
        'eyes': 0,
      },
      performed_via_github_app: null,
    },
  ],
}

export const MOCK_COMMENT = {
  url: `${GITHUB_BASE_URL}/repos/org/repo/issues/comments/1144935479`,
  html_url: 'https://github.com/org/repo/issues/17#issuecomment-1144935479',
  issue_url: `${GITHUB_BASE_URL}/repos/org/repo/issues/17`,
  id: 1144935480,
  node_id: 'IC_kwDOFwgxOc5EPlQ3',
  number: 1,
  user: {
    login: 'user3',
    id: 1234569,
    node_id: 'MDQ6VXNlcjEyMzQ1Njk=',
    gravatar_id: '',
    url: `${GITHUB_BASE_URL}/users/user3`,
    html_url: 'https://github.com/user3',
    followers_url: `${GITHUB_BASE_URL}/users/user3/followers`,
    following_url: `${GITHUB_BASE_URL}/users/user3/following{/other_user}`,
    gists_url: `${GITHUB_BASE_URL}/users/user3/gists{/gist_id}`,
    starred_url: `${GITHUB_BASE_URL}/users/user3/starred{/owner}{/repo}`,
    subscriptions_url: `${GITHUB_BASE_URL}/users/user3/subscriptions`,
    organizations_url: `${GITHUB_BASE_URL}/users/user3/orgs`,
    repos_url: `${GITHUB_BASE_URL}/users/user3/repos`,
    events_url: `${GITHUB_BASE_URL}/users/user3/events{/privacy}`,
    received_events_url: `${GITHUB_BASE_URL}/users/user3/received_events`,
    type: 'User',
    site_admin: false,
  },
  created_at: '2022-06-02T14:31:04Z',
  updated_at: '2022-06-08T08:18:43Z',
  author_association: 'NONE',
  body: `created_comment_body`,
  reactions: {
    'url': `${GITHUB_BASE_URL}/repos/org/repo/issues/comments/1144935479/reactions`,
    'total_count': 0,
    '+1': 0,
    '-1': 0,
    'laugh': 0,
    'hooray': 0,
    'confused': 0,
    'heart': 0,
    'rocket': 0,
    'eyes': 0,
  },
  performed_via_github_app: null,
}

