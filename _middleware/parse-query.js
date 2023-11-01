module.exports = parseQuery;

function parseQuery(query) {
  let where = {};
  let include = [];
  let attributes = [];

  let queryObject = {};

  if (query.select !== undefined) {
    attributes = query.select.split(',')
    Object.assign(queryObject, {
      attributes: attributes
    });
  }

  if (query.include !== undefined) {
    const tmpArray = query.include.split(';');
    tmpArray.forEach(element => {
      if (element.includes('.')) {
        const inc = element.split('.');
        const ass = inc.shift();
        include.push({
          association: ass,
          include: inc
        });
      } else {
        include.push(element);
      }
    });
    Object.assign(queryObject, {
      include: include
    });
  }

  if (query.filters !== undefined) {
    const tmpArray = query.filters.split(';');
    tmpArray.forEach(element => {
      const id = element.split(':');
      const type = id.shift();

      Object.assign(where, {
        [type]: id
      })
    });
    Object.assign(queryObject, {
      where: where
    });
  }

  return queryObject;
}