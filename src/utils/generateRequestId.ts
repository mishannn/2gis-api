function prepareParams(params: any): string {
  return Object.keys(params)
    .map(param => ({
      key: param,
      value: (params[param] || '').toString(),
    }))
    .sort((a, b) => (a.key < b.key ? -1 : a.key > b.key ? 1 : 0))
    .map(item => item.value)
    .join('');
}

function prepareUrl(url: string): string {
  return url.split('?')[0].replace(/^[^/]*\/\/[^/]+\//, '/');
}

const T = [22, 4147, 1234, 11];
const I = T[0] + T[3];
const C = T[1] + T[2];

function encode(s: string): number {
  const t = s.length;
  let r = C;

  for (let n = 0; n < t; n += 1) {
    r = r * I + s.charCodeAt(n);
    r >>>= 0;
  }
  return r;
}

export default function (url: string, params: any, key: string): number {
  return encode(prepareUrl(url) + prepareParams(params) + key);
}
