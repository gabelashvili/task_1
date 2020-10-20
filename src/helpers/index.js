/* eslint-disable import/no-dynamic-require */
export const toGeo = (word) => {
  const reg = {
    a: 'ა',
    b: 'ბ',
    g: 'გ',
    d: 'დ',
    e: 'ე',
    v: 'ვ',
    z: 'ზ',
    T: 'თ',
    i: 'ი',
    k: 'კ',
    l: 'ლ',
    m: 'მ',
    n: 'ნ',
    o: 'ო',
    p: 'პ',
    J: 'ჟ',
    r: 'რ',
    s: 'ს',
    t: 'ტ',
    u: 'უ',
    f: 'ფ',
    q: 'ქ',
    R: 'ღ',
    y: 'ყ',
    S: 'შ',
    C: 'ჩ',
    c: 'ც',
    Z: 'ძ',
    w: 'წ',
    W: 'ჭ',
    x: 'ხ',
    j: 'ჯ',
    h: 'ჰ',
  }
  const newString = word.split('')
    .map((el) => (reg[el] ? reg[el] : el)).join('')
  return newString
}

export const validation = {
  name: (value) => ({
    isValid: value.length > 1,
    msg: 'სახელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს',
  }),
  lastName: (value) => ({
    isValid: value.length > 3,
    msg: 'გვარი უნდა შეიცავდეს მინიმუმ 4 სიმბოლოს',
  }),
  pid: (value) => ({
    isValid: value.length > 8 && value.length < 15,
  }),
  email: (value) => {
    const re = /\S+@\S+\.\S+/
    return {
      isValid: re.test(String(value).toLowerCase()),
      msg: 'არასწორი Email მისამართი',
    }
  },
  userName: (value) => ({
    isValid: value.length > 3,
    msg: 'მომხმარებლის სახელი უნდა შეიცავდეს მინიმუმ 4 სიმბოლოს',
  }),
  phoneNumber: (value, isGeo) => ({
    isValid: isGeo ? value.length === 9 : value.length > 0,
    msg: 'მობილურის ნომერი უნდა შეიცავდეს 9 სიმბოლოს',
  }),
  birthDate: (value, isSubbmitted) => ({
    isValid: !value && isSubbmitted,
  }),
  password: (value, userName) => {
    const name = userName?.slice(0, 3)
    const password = value?.slice(0, 3)
    if (name === password) {
      return {
        isValid: false,
        msg: 'პაროლი არ უნდა იწყებოდეს მომხმარებლის სახელით',
      }
    }
    if (value.length < 6) {
      return {
        isValid: false,
        msg: 'პაროლი უნდა შედგებოდეს მინიმუმ 6 სიმბოლოსგან',
      }
    }
    return {
      isValid: true,
    }
  },
}

// eslint-disable-next-line global-require
export const generateUrl = (n) => require(`images/${n.toLocaleLowerCase()}.png`)

export const countryList = [
  {
    name_native: 'საქართველო',
    name_en: 'Georgia',
    index: 995,
  },
  {
    name_native: 'საქართველო',
    name_en: 'Georgia',
    index: 995,
  },
  {
    name_native: 'Türkiye',
    name_en: 'Turkey',
    index: 90,
  },
  {
    name_native: 'Россия',
    name_en: 'Russia',
    index: 7,
  },
  {
    name_native: 'Azərbaycan',
    name_en: 'Azerbaijan',
    index: 994,
  },
  {
    name_native: 'Հայաստան',
    name_en: 'Armenia',
    index: 374,
  },
  {
    name_native: 'Україна',
    name_en: 'Ukraine',
    index: 380,
  },
  {
    name_native: 'Казахстан',
    name_en: 'Kazakhstan',
    index: 7,
  },
  {
    name_native: 'Беларусь',
    name_en: 'Belarus',
    index: 375,
  },
]
