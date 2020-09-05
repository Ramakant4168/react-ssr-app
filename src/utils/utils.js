export function getUrlKeyMap (url) {
    
    const params = url.split('/');
    let prevYr = null;
    let prevLaunch = null;
    let prevLand = null;
    let paramMap = new Map()

    params.forEach((element) => {

        if (element.startsWith('yr')) {
            prevYr = element.split('-')[1]
            if (prevYr) paramMap.set('yr', prevYr)
        }
        if (element.startsWith('lau')) {
            prevLaunch = element.split('-')[1]
            if (prevLaunch) paramMap.set('lau', prevLaunch)
        }
        if (element.startsWith('lnd')) {
            prevLand = element.split('-')[1]
            if (prevLand) paramMap.set('lnd', prevLand)
        }
    })

    return paramMap;
}

export function getBrowserUrl(url, obj) {

    let paramMap =getUrlKeyMap(url)

    paramMap.set(obj.key, obj.value)

    let newBrowserUrl = ''
    for (const [key, val] of paramMap)
        newBrowserUrl += `/${key}-${val}`

    return newBrowserUrl;
}


export function getUrlBasedOnSate(year = null, launch = null, land = null) {

    let url = ''
    if (!year && (launch===null) && (land===null)) {
        url = `https://api.spacexdata.com/v3/launches?limit=100`
    }
    else if (year &&  (launch!==null) && (land!==null)) {
        url = `https://api.spacexdata.com/v3/launches?
          limit=100&launch_success=${launch}&land_success=${land}&launch_year=${year}`
    }
    else if (year && (launch!==null) && (land===null)) {
        url = `https://api.spacexdata.com/v3/launches?
      limit=100&launch_success=${launch}&launch_year=${year}`
    }
    else if (year && (land!==null) && (launch===null)) {
        url = `https://api.spacexdata.com/v3/launches?
      limit=100&land_success=${land}&launch_year=${year}`
    }
    else if ((launch!==null) && (land!==null) && !year) {
        url = `https://api.spacexdata.com/v3/launches?
      limit=100&launch_success=${launch}&land_success=${land}`
    }
    else if (year && (launch===null) && (land===null)) {
        url = `https://api.spacexdata.com/v3/launches?
      limit=100&launch_year=${year}`
    }
    else if ((launch!==null) && !year && (land===null)) {
        url = `https://api.spacexdata.com/v3/launches?
      limit=100&launch_success=${launch}`
    }
    else if ((land!==null) && (launch===null) && !year) {
        console.log("===here")
        url = `https://api.spacexdata.com/v3/launches?
        limit=100&land_success=${land}`
    }

    return url;

}
