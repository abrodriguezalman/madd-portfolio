/* global nn */
let data

async function setup () {
  const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSGgmPzZ3i3fj_ELzRLoxVvBiAPGQwJ-O8IPZR-lBkIiofkffJgj4FtZTE03aYb1EIP_Vp6uxHHrHix/pub?output=csv'
  data = await nn.loadData(url)
  data = nn.parseData(data)
  console.log(data)
  updateContent()
}

function updateContent () {
  const hash = window.location.hash
  const id = hash.slice(1)
  if (id) {
    const item = data.find(i => i.id === id)
    nn.get('#title').content(item.title)
    nn.get('#date').content(item.date)
    nn.get('#course').content(item.course)
    nn.get('#description').content(item.description)
    nn.get('#URL').setAttribute("href", item.url)
  }
}

nn.on('load', setup)
  