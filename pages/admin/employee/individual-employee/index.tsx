/* eslint-disable unused-imports/no-unused-vars */
import { Box } from '@chakra-ui/react';
import FloatingHeader from '@lib/components/base/floating-header';
import Table from '@lib/components/base/TablePage';
import Sidenav from '@lib/components/Layout/Sidebar/Sidenav';
import { mapIndividualEmployeeDataToRows } from '@utils/individualEmployeeUtils';
import { useClassContext } from 'context/ClassContext';
import individualEmployeeData from 'data/individualEmployeeData';
import { useEffect, useMemo, useState } from 'react';

const IndividualEmployee = () => {
  const [isClient, setIsClient] = useState(false);
  const { isClassToggled } = useClassContext();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const employeeRows = useMemo(() => {
    return mapIndividualEmployeeDataToRows(individualEmployeeData);
  }, [individualEmployeeData]);

  return (
    <Box>
      {isClient && (
        <Sidenav>
          <Box
            w="auto"
            left="0"
            right="0"
            width={'100%'}
            className={isClassToggled ? 'toggled-class' : 'default-class'}
            zIndex={2}
            pr="2em"
          >
            <FloatingHeader
              title="Employees"
              itemCount="102+ Customers"
              csvImage
              refreshImage
              addSingleButtons
              lastBreadcrumbColor="#FF8A43"
              breadcrumbs={[
                {
                  label: 'Home',
                  breadcrumLink: '/admin/inventory/products',
                },
                {
                  label: 'Individual Employee',
                  breadcrumLink: '/admin/employee/individual-employee',
                },
              ]}
              simpleSearch
              simplePlaceHolderSearch="Search here..."
              addNew="Employee"
              addLink="/admin/employee/add-employee"
            />
          </Box>

          <Box
            p="2em 2em 4em 2em"
            position="relative"
            top={{
              base: '0em',
              md: '8.5em',
            }}
            overflowX="hidden"
            overflowY="scroll"
            h="60vh"
            zIndex={1}
          >
            <Table
              hoverEffect
              headers={[
                'Employee Name',
                'User Name',
                'Role',
                'Group Name',
                'Email Address',
                'Phone No',
                'Permission',
                '',
              ]}
              rows={employeeRows}
            />
          </Box>
        </Sidenav>
      )}
    </Box>
  );
};

export default IndividualEmployee;
