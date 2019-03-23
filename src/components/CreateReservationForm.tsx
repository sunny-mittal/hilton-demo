import { ErrorMessage, Formik } from 'formik'
import React, { PureComponent } from 'react'
import { Alert, Text, View } from 'react-native'
import { Button, Header, Input } from 'react-native-elements'
import { object, string } from 'yup'

import styles from '../styles'
import { NCreateReservation } from '../types'

const initialValues = {
  arrival: '',
  departure: '',
  hotel: '',
  name: ''
}

const validationSchema = object().shape({
  arrival: string().required('Arrival data is required'),
  departure: string().required('Departure date is required'),
  hotel: string().required('Hotel is required'),
  name: string().required('Name is required')
})

const ReservationForm = ({
  onSubmit
}: {
  onSubmit: (data: any, actions: any) => void
}) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {({ values, handleChange, handleSubmit, isSubmitting }) => (
      <View>
        <Input
          placeholder="Name"
          onChangeText={handleChange('name')}
          value={values.name}
        />
        <ErrorMessage name="name" component={Text} />
        <Input
          placeholder="Hotel"
          onChangeText={handleChange('hotel')}
          value={values.hotel}
        />
        <ErrorMessage name="hotel" component={Text} />
        <Input
          placeholder="Arrival (in dd/mm/yyyy format)"
          onChangeText={handleChange('arrival')}
          value={values.arrival}
        />
        <ErrorMessage name="arrival" component={Text} />
        <Input
          placeholder="Departure (in dd/mm/yyyy format)"
          onChangeText={handleChange('departure')}
          value={values.departure}
        />
        <ErrorMessage name="departure" component={Text} />
        <Button style={styles.button} onPress={handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
)

export default class CreateReservationForm extends PureComponent<
  NCreateReservation.IFormProps,
  NCreateReservation.IFormState
> {
  constructor(props: NCreateReservation.IFormProps) {
    super(props)
    this.makeReservation = this.makeReservation.bind(this)
  }

  public async makeReservation(
    {
      name,
      hotel: hotelName,
      arrival: arrivalDate,
      departure: departureDate
    }: {
      name: string
      hotel: string
      arrival: string
      departure: string
    },
    { resetForm }: { resetForm: () => void }
  ) {
    try {
      await this.props.onSubmit({
        variables: {
          data: {
            arrivalDate,
            departureDate,
            hotelName,
            name
          }
        }
      })
      resetForm()
      Alert.alert('Thanks!', 'Reservation booked successfully')
    } catch (e) {
      Alert.alert('Oops!', 'Something went wrong, please try again')
    }
  }

  public render() {
    return (
      <View style={styles.container}>
        <Header
          centerComponent={{
            style: styles.header,
            text: 'Create Reservation'
          }}
        />
        <ReservationForm onSubmit={this.makeReservation} />
      </View>
    )
  }
}
