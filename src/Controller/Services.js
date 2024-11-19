const baseURL = 'https://672c3f2a1600dda5a9f7ac39.mockapi.io/QLNV';

export const qlnvServices = {
    getListNhanVien: () => {
        return axios({
            method: 'GET',
            url: baseURL
        })
    },

    getNhanVienByID: (id) => {
        return axios({
            method: 'GET',
            url: `${baseURL}/${id}`
        })
    },

    getNhanVienByLoaiNV: (loaiNV) => {
        return axios({
            method: 'GET',
            url: `${baseURL}?loaiNV=${loaiNV}`
        })
    },

    addNhanVien: (payload) => {
        return axios({
            method: 'POST',
            url: baseURL,
            data: payload
        })
    },

    deleteNhanVien: (id) => {
        return axios({
            method: "DELETE",
            url: `${baseURL}/${id}`
        })
    },

    editNhanVien :(id, payload) => {
        return axios({
            method: "PUT",
            url: `${baseURL}/${id}`,
            data: payload
        })
    }
}