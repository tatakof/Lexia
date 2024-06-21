import { RouteComponentProps } from 'react-router-dom'

export const HelloPage = (
    props: RouteComponentProps<{ name: string }>
) => {
    return <div>Bienvenido {props.match.params.name} !</div>
}
