import axios from 'axios'

const BASE_URL = 'https://equran.id/api/v2'

export const getSurah = () => axios.get(`${BASE_URL}/surat`)
export const getDetailSurah = params => axios.get(`${BASE_URL}/surat/${params}`)