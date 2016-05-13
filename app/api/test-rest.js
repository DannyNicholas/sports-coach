import $ from 'jquery'

const jsonRequest =
{
    'operation': 'search',
    'params': {
        'keywords': 'user',
        'groups': 'consumers',
        'pageSize': 5
    }
}


export default {
  getUsers: (onSuccess) => $.post('https://bristol-stage.community-currency.org/cyclos/sandbox01', jsonRequest, onSuccess),
  addVote: (itemId, vote, onSuccess) => {
    $.post(`/api/tech/${itemId}/votes`, vote, callIfDefined(onSuccess))
  },
}
