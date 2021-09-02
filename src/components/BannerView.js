import React from 'react'

export const BannerView = ({not,colClass,borderClass,category}) => {
    return (
        <div className={colClass}>
                             <section className="categoryList p-1">
                                <span className="numberOfTasks text-white ps-2 pt-2 text-break">{not}</span>
                                <h5 className="categoryTitle text-white p-2 mt-2 text-break">{category}</h5>
                                <div className="w-100 px-2">
                                <span className={borderClass}></span>
                                </div>
                            </section>   
                        </div>
    )
}
