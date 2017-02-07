"""Added login params table

Revision ID: 76534df49c3d
Revises: 271a75be297d
Create Date: 2017-02-07 11:34:05.176001

"""

# revision identifiers, used by Alembic.
revision = '76534df49c3d'
down_revision = '271a75be297d'

from alembic import op
import sqlalchemy as sa


def upgrade():
    op.create_table(
        'loginOptions',
        sa.Column('option', sa.String(20)),
        sa.Column('value', sa.String(254))
    )

def downgrade():
    pass
