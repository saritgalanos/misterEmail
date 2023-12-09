import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

export const emailService = {
    query,
    save,
    remove,
    getById,
    createEmail,
    getDefaultFilter
}

const email = {
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    isStarred: false,
    sentAt: 1551133930594,
    removedAt: null, //for later use from: 'momo@momo.com', to: 'user@appsus.com'
    from: 'momo@momo.com', 
    to: 'saritgalanos@misteremail.com'
}

const loggedinUser = {
    email: 'saritgalanos@mistermail.com',
    fullname: 'Sarit Galanos'
}


const STORAGE_KEY = 'emails'

_createEmails()

async function query(filterBy) {
    let emails = await storageService.query(STORAGE_KEY)
    if (filterBy) {
        console.log("query filer:"+filterBy)
        var { txt,emailStatus, isRead } = filterBy
        // maxBatteryStatus = maxBatteryStatus || Infinity
        // minBatteryStatus = minBatteryStatus || 0
        emails = emails.filter(email => email.body.toLowerCase().includes(txt.toLowerCase())
        || email.subject.toLowerCase().includes(txt.toLowerCase()))
        //     && (robot.batteryStatus < maxBatteryStatus)
        //     && robot.batteryStatus > minBatteryStatus)
    }
    return emails
}

function getById(id) {
    return storageService.get(STORAGE_KEY, id)
}

function remove(id) {
    return storageService.remove(STORAGE_KEY, id)
}

function save(emailToSave) {
    if (emailToSave.id) {
        return storageService.put(STORAGE_KEY, emailToSave)
    } else {
        //emailToSave.isOn = false
        return storageService.post(STORAGE_KEY, emailToSave)
    }
}

function createEmail(subject = '', body = '', sentAt = 0, removedAt = null,from="", to="") {
    return {
        subject,
        body,
        isRead: false,
        isStarred: false,
        sentAt,
        removedAt,
        from,
        to
    }
}

function getDefaultFilter() {
    return {
        emaiStatus: '',
        txt: '',
        isRead: ''
    }
}



function _createEmails() {
    let emails = utilService.loadFromStorage(STORAGE_KEY)
    
    if (!emails || !emails.length) {

        const emailBodylong = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`

         emails = [
            {
                id: 'e101', subject: 'Plans for tomorrow', body: 'emailBodylong',
                isRead: false, isStarred: false, sentAt: 1551133930594, removedAt: null,
                from: 'roni@gmail.com', to: 'saritgalanos@misteremail.com'
            },
            
            {
                id: 'e102', subject: 'My next vacation', body: 'I would like to take a vacation for Christmas ',
                isRead: false, isStarred: false, sentAt: 1551133940594, removedAt: null,
                from: 'shiri@momo.com', to: 'saritgalanos@misteremail.com'
            },
            {
                id: 'e103', subject: 'Your yearly bonus', body: 'It is time for your yearly bonus, please come to my office',
                isRead: false, isStarred: false, sentAt: 1551133950594, removedAt: null,
                from: 'dan@momo.com', to: 'saritgalanos@misteremail.com'
            },
            {
                id: 'e104', subject: 'Plans for tomorrow', body: 'emailBodylong',
                isRead: false, isStarred: false, sentAt: 1551133930594, removedAt: null,
                from: 'roni@gmail.com', to: 'saritgalanos@misteremail.com'
            },
            {
                id: 'e105', subject: 'Plans for tomorrow', body: 'emailBodylong',
                isRead: false, isStarred: false, sentAt: 1551133930594, removedAt: null,
                from: 'roni@gmail.com', to: 'saritgalanos@misteremail.com'
            },
            
            {
                id: 'e106', subject: 'My next vacation', body: 'I would like to take a vacation for Christmas ',
                isRead: false, isStarred: false, sentAt: 1551133940594, removedAt: null,
                from: 'shiri@momo.com', to: 'saritgalanos@misteremail.com'
            },
            {
                id: 'e107', subject: 'Your yearly bonus', body: 'It is time for your yearly bonus, please come to my office',
                isRead: false, isStarred: false, sentAt: 1551133950594, removedAt: null,
                from: 'daniel@momo.com', to: 'saritgalanos@misteremail.com'
            },
            {
                id: 'e108', subject: 'Plans for tomorrow', body: 'emailBodylong',
                isRead: false, isStarred: false, sentAt: 1551133930594, removedAt: null,
                from: 'roni@gmail.com', to: 'saritgalanos@misteremail.com'
            }

        ]
        console.log(emails)
        utilService.saveToStorage(STORAGE_KEY, emails)
    }
}

