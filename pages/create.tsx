import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Select from 'react-select'
import { useCategoriesQuery, useCategoryMutation } from '../services/categories/categories.query'
import { CreateCategoryVariables } from '../types';
import styles from '../styles/Home.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'

const Create: NextPage = () => {
    const router = useRouter();
    const { data, error, loading } = useCategoriesQuery();
    const [CreateCategory] = useCategoryMutation()
    const [categoryName, setCategoryName] = useState('');
    const [parentCategoryUid, setParentCategoryUid] = useState('');

    const handleParentUid = (e: any) => {
        setParentCategoryUid(e.uid);
    }

    const submitHandler = async (e: any) => {
        e.preventDefault();
        console.log(categoryName, parentCategoryUid)
        CreateCategory({
            variables: {
                category: {
                    name: categoryName,
                    parentCategoryUid: parentCategoryUid
                }
            }
        }).then(({ data }) => {
            if (data?.createCategory.statusCode == 200) {
                toast.success(data!.createCategory.message)
                router.push(`/`)
            } else if (data?.createCategory.statusCode == 400) {
                toast.error(data!.createCategory.message)
            }
            console.log(data)
        }).catch(e => {
            toast.error(e);
            console.log(e)
        })
    }

    return (
        <div className={styles.container}>
            <main className="form-signin">
                <form
                    style={{ margin: '50px 0' }}
                    onSubmit={submitHandler}
                >
                    {/* <img className="mb-4" src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
                    <h1 className="h3 mb-3 fw-normal">Create new Category</h1>

                    <div className="form-floating">
                        <input value={categoryName} onChange={e => setCategoryName(e.target.value)} type="text" className="form-control" id="floatingInput" placeholder="t-shirt" />
                        <label htmlFor="floatingInput">Category Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        {/* <input value={parentCategoryUid} onChange={e => setParentCategoryUid(e.target.value)} type="text" className="form-control" id="floatingPassword" placeholder="Men" />
                        <label htmlFor="floatingPassword">Parent Category Name</label> */}
                        <Select
                            options={data?.getCategories?.result?.categories as any}
                            getOptionLabel={(option: any) => option.name}
                            getOptionValue={(option: any) => option.uid}
                            onChange={handleParentUid}
                        />
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Create</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
            </main>
            <ToastContainer />
        </div>
    )
}

export default Create