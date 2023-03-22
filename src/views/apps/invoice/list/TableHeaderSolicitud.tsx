// ** Next Import
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** MUI Imports
import Box from '@mui/material/Box'
import Select from '@mui/material/Select'
import { GridRowId } from '@mui/x-data-grid'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import ButtonGroupSplit from 'src/views/components/button-group/ButtonGroupSplit'

interface TableHeaderProps {
  value: string
  selectedRows: GridRowId[]
  handleFilter: (val: string) => void
}

const TableHeaderSolicitud = (props: TableHeaderProps) => {
  // ** Props
  const { value, selectedRows, handleFilter } = props

  return (
    <Box
      sx={{
        p: 5,
        pb: 3,
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Select
        size='small'
        displayEmpty
        defaultValue=''
        sx={{ mr: 4, mb: 2 }}
        
        renderValue={selected => (selected.length === 0 ? 'Actions' : selected)}
      >
        <MenuItem >Actions</MenuItem>
        <MenuItem value='Delete'>Delete</MenuItem>
        <MenuItem value='Edit'>Edit</MenuItem>
        <MenuItem value='Send'>Send</MenuItem>
      </Select>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <TextField
          size='small'
          value={value}
          placeholder='Search Invoice'
          sx={{ mr: 4, mb: 2, maxWidth: '180px' }}
          onChange={e => handleFilter(e.target.value)}
        /> 
        <Select
        size='small'
        displayEmpty
        defaultValue=''
        sx={{ mr: 4, mb: 2 }}
        
        renderValue={selected => (selected.length === 0 ? 'Solicitudes' : selected)}
      >
        <MenuItem value='Baja' >Solicitud de Baja</MenuItem>
        <MenuItem value='Bajas'>Solicitud de Bajas</MenuItem>
        <MenuItem value='Bajax'>Solicitud de Bajax</MenuItem>
      </Select>
        
      </Box>
    </Box>
  )
}

export default TableHeaderSolicitud
