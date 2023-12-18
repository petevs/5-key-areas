import NotificationEmail from '@/components/emails/NotificationEmail'
import { render } from '@react-email/render'
import NarrowContainer from '@/components/NarrowContainer'

export default function page() {

    const emailHtml = render(<NotificationEmail username='pvs' frequency='monthly' />)

    return (
        <NarrowContainer>
            <div dangerouslySetInnerHTML={{ __html: emailHtml }} />
        </NarrowContainer>
    )
}