"""X,Y for WidgetInstance

Revision ID: 271a75be297d
Revises: 20bef1bf0e37
Create Date: 2015-03-22 18:21:20.136440

"""

# revision identifiers, used by Alembic.
revision = '271a75be297d'
down_revision = '20bef1bf0e37'

from alembic import op
import sqlalchemy as sa


def upgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.add_column('widgetInstance', sa.Column('x', sa.Integer(), nullable=True))
    op.add_column('widgetInstance', sa.Column('y', sa.Integer(), nullable=True))
## not supported with sqlite    op.drop_column('widgetInstance', 'order')
    ### end Alembic commands ###


def downgrade():
    ### commands auto generated by Alembic - please adjust! ###
##    op.add_column('widgetInstance', sa.Column('order', sa.INTEGER(), nullable=True))
##    op.drop_column('widgetInstance', 'y')
##    op.drop_column('widgetInstance', 'x')
    ### end Alembic commands ###
