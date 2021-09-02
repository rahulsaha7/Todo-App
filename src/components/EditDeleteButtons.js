import React from 'react'

import {FcEditImage} from 'react-icons/fc'
import {FcDeleteRow} from 'react-icons/fc'

export const EditDeleteButtons = () => {
    return (
        <div className="update-delete-button w-50 d-flex justify-content-end">
                                        <button className="edit">
                                            <FcEditImage />


                                        </button>
                                            <button className="delete">
                                                <FcDeleteRow />
                                            </button>
                                    </div>
    )
}
