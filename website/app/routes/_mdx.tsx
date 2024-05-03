import { Outlet } from '@remix-run/react'
import { MDXProvider } from '@mdx-js/react'
import { MDXComponents } from 'mdx/types'

const components: MDXComponents = {}

export default function Page() {
    return (
        <MDXProvider components={components}>
            <div className='px-6 md:px-12 pt-12 md:pt-24 w-full flex flex-col items-center '>
                <div className='prose min-w-0 w-full max-w-[1800px]'>
                    <Outlet />
                </div>
            </div>
        </MDXProvider>
    )
}
